import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, User, Settings, Bell, Search, Edit3, Clock, Zap, Gem, ChevronRight, Trash2, Plus } from 'lucide-react';
import { useAuth } from '../Contexts/AuthContext';

const AICopilotLanding = () => {
    const [pastChats, setPastChats] = useState([]);
    const [currentChatId, setCurrentChatId] = useState(null);
    const [currentMessage, setCurrentMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [copilotResponse, setCopilotResponse] = useState('');
    const [isComposing, setIsComposing] = useState(false);
    const [editableResponse, setEditableResponse] = useState('');
    const [activeSection, setActiveSection] = useState('chat');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [streamingResponse, setStreamingResponse] = useState('');
    const { currentUser, logout } = useAuth();
    const chatEndRef = useRef(null);

    const API_KEY = 'AIzaSyCCfqB_AXX87EgcJzOLhgp5CK5LpHYfTcA';

    const suggestedQuestions = [
        "How can I improve my productivity workflow?",
        "What are the best practices for code documentation?",
        "Explain machine learning fundamentals",
        "Help me create a project timeline",
        "What's the difference between React and Vue?",
        "How to optimize database queries?",
        "Explain cloud computing benefits",
        "Best practices for team collaboration"
    ];

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    const simulateTyping = (text, callback) => {
        setIsTyping(true);
        setStreamingResponse('');

        let index = 0;
        const words = text.split(' ');

        const addWord = () => {
            if (index < words.length) {
                setStreamingResponse(prev => {
                    const newText = index === 0 ? words[index] : prev + ' ' + words[index];
                    return newText;
                });
                index++;
                setTimeout(addWord, Math.random() * 100 + 50);
            } else {
                setIsTyping(false);
                if (callback) callback();
            }
        };

        addWord();
    };

    const callGeminiAPI = async (prompt) => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

        const requestBody = {
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error('Unexpected response format from Gemini API');
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            throw error;
        }
    };

    const createNewChat = () => {
        const newChatId = Date.now();
        const newChat = {
            id: newChatId,
            title: "New Chat",
            timestamp: "Just now",
            messages: [],
            lastMessage: "New conversation started",
            createdAt: new Date()
        };
        
        setPastChats(prev => [newChat, ...prev]);
        setCurrentChatId(newChatId);
        setChatMessages([]);
        setCopilotResponse('');
        setIsComposing(false);
    };

    const loadChat = (chatId) => {
        const chat = pastChats.find(c => c.id === chatId);
        if (chat) {
            setCurrentChatId(chatId);
            setChatMessages(chat.messages || []);
            setCopilotResponse('');
            setIsComposing(false);
        }
    };

    const updateCurrentChat = (messages, lastMessage) => {
        if (currentChatId) {
            setPastChats(prev => prev.map(chat => {
                if (chat.id === currentChatId) {
                    return {
                        ...chat,
                        messages: messages,
                        lastMessage: lastMessage,
                        timestamp: "Just now",
                        title: messages.length > 0 ? 
                            (messages[0].text.slice(0, 30) + (messages[0].text.length > 30 ? "..." : "")) : 
                            "New Chat"
                    };
                }
                return chat;
            }));
        }
    };

    const deleteChat = (chatId, e) => {
        e.stopPropagation();
        setPastChats(prev => prev.filter(chat => chat.id !== chatId));
        if (currentChatId === chatId) {
            setCurrentChatId(null);
            setChatMessages([]);
        }
    };

    const handleSuggestionClick = async (question) => {
        setIsLoading(true);
        setCopilotResponse('');

        try {
            const response = await callGeminiAPI(`Please provide a comprehensive and helpful answer to this question: "${question}". Make your response informative, practical, and well-structured.`);
            setCopilotResponse(response);
        } catch (error) {
            setCopilotResponse(`Error: ${error.message}. Please check your API configuration.`);
        } finally {
            setIsLoading(false);
        }
    };

    const generateAIResponse = async (userMessage) => {
        try {
            const prompt = `Please respond to this message in a helpful and conversational way: "${userMessage}"`;
            const response = await callGeminiAPI(prompt);
            return response;
        } catch (error) {
            return `Error generating response: ${error.message}`;
        }
    };

    const handleCompose = () => {
        setEditableResponse(copilotResponse);
        setIsComposing(true);
        setActiveSection('chat');
    };

    const handleSendMessage = async () => {
        let messageText = '';
        let shouldCreateNewChat = false;

        if (isComposing && editableResponse.trim()) {
            messageText = editableResponse;
        } else if (currentMessage.trim()) {
            messageText = currentMessage;
        } else {
            return;
        }

        if (!currentChatId) {
            createNewChat();
            shouldCreateNewChat = true;
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        const newMessage = {
            id: Date.now(),
            text: messageText,
            timestamp: new Date().toLocaleTimeString(),
            sender: 'user'
        };

        const updatedMessages = [...chatMessages, newMessage];
        setChatMessages(updatedMessages);

        const tempAiId = Date.now() + 1;
        const tempAiMessage = {
            id: tempAiId,
            text: '',
            timestamp: new Date().toLocaleTimeString(),
            sender: 'ai',
            isTyping: true
        };
        setChatMessages(prev => [...prev, tempAiMessage]);

        const aiResponseText = await generateAIResponse(messageText);

        simulateTyping(aiResponseText, () => {
            const finalMessages = [...updatedMessages, {
                id: tempAiId,
                text: aiResponseText,
                timestamp: new Date().toLocaleTimeString(),
                sender: 'ai',
                isTyping: false
            }];
            
            setChatMessages(finalMessages);
            setStreamingResponse('');
            
            updateCurrentChat(finalMessages, messageText.slice(0, 50) + (messageText.length > 50 ? "..." : ""));
        });

        if (!shouldCreateNewChat && currentChatId) {
            updateCurrentChat(updatedMessages, messageText.slice(0, 50) + (messageText.length > 50 ? "..." : ""));
        }

        if (isComposing) {
            setEditableResponse('');
            setIsComposing(false);
            setCopilotResponse('');
        } else {
            setCurrentMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            console.log("Logged out successfully");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <Gem className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 hover:scale-110 cursor-pointer">Synapse</span>                            </div>

                            <div className="hidden md:flex items-center space-x-6">

                            </div>
                        </div>

                        {/* User Detail Section */}
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <Bell className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                <Settings className="w-5 h-5" />
                            </button>
                            <div className="flex items-center space-x-3 pl-3 border-l border-slate-200">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <User className="w-8 h-4 text-white" />
                                </div>
                                <div className="hidden md:block">
                                    <div className="text-sm font-medium text-slate-900">{currentUser.displayName}</div>
                                    <div className="text-xs text-slate-500">{currentUser.email}</div>
                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="w-full py-1 lg:py-2 px-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 min-h-screen">

                    {/* Past Chats Section */}
                    <div className="md:col-span-1 lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 h-full min-h-96">
                            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-slate-800 flex items-center">
                                    <Clock className="w-5 h-5 mr-2 text-slate-500" />
                                    Past Chats
                                </h2>
                                <button
                                    onClick={createNewChat}
                                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                    title="New Chat"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="p-2 space-y-2 h-96 overflow-y-auto">
                                {pastChats.length > 0 ? (
                                    pastChats.map((chat) => (
                                        <div
                                            key={chat.id}
                                            onClick={() => loadChat(chat.id)}
                                            className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer group relative ${
                                                currentChatId === chat.id 
                                                    ? 'border-blue-300 bg-blue-50' 
                                                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1 min-w-0 pr-2">
                                                    <h3 className="text-sm font-medium text-slate-800 truncate">{chat.title}</h3>
                                                    <p className="text-xs text-slate-500 mt-1 truncate">{chat.lastMessage}</p>
                                                    <p className="text-xs text-slate-400 mt-1">{chat.timestamp}</p>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <button
                                                        onClick={(e) => deleteChat(chat.id, e)}
                                                        className="p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200"
                                                        title="Delete chat"
                                                    >
                                                        <Trash2 className="w-3 h-3" />
                                                    </button>
                                                    <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm">
                                        <MessageSquare className="w-12 h-12 mb-3 text-slate-300" />
                                        <p className="text-center italic">No chats yet.</p>
                                        <p className="text-center mt-1 italic">Start a conversation!</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Working Chat Section */}
                    <div className="md:col-span-1 lg:col-span-6">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-96">
                            <div className="p-4 border-b border-slate-200">
                                <h2 className="text-lg font-semibold text-slate-800 flex items-center">
                                    <MessageSquare className="w-5 h-5 mr-2 text-slate-500" />
                                    AI Assistant
                                    {currentChatId && (
                                        <span className="ml-2 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                            Active Chat
                                        </span>
                                    )}
                                </h2>
                            </div>

                            <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-64 max-h-96">
                                {chatMessages.length === 0 ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <MessageSquare className="w-8 h-8 text-blue-500" />
                                            </div>
                                            <h3 className="text-lg font-medium text-slate-800 mb-2">Start a conversation</h3>
                                            <p className="text-slate-500 text-sm">Ask me anything or use the copilot suggestions</p>
                                        </div>
                                    </div>
                                ) : (
                                    chatMessages.map((message) => (
                                        <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-2xl px-4 py-3 rounded-lg ${message.sender === 'user'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-slate-100 text-slate-800'
                                                }`}>
                                                {message.sender === 'ai' && message.isTyping ? (
                                                    <>
                                                        <p className="text-sm whitespace-pre-wrap leading-relaxed">
                                                            {streamingResponse}
                                                            <span className="animate-pulse">|</span>
                                                        </p>
                                                        {streamingResponse === '' && (
                                                            <div className="flex items-center space-x-1">
                                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                                                )}
                                                <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
                                                    {message.timestamp}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                                <div ref={chatEndRef} />
                            </div>

                            <div className="p-4 border-t border-slate-200">
                                {isComposing ? (
                                    <div className="space-y-3">
                                        <div className="text-sm text-slate-600 bg-blue-50 p-2 rounded-lg border border-blue-200">
                                            <span className="font-medium">Editing copilot response:</span>
                                        </div>
                                        <div className="flex space-x-3">
                                            <textarea
                                                value={editableResponse}
                                                onChange={(e) => setEditableResponse(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                placeholder="Edit your message..."
                                                className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                                rows={3}
                                            />
                                            <button
                                                onClick={handleSendMessage}
                                                className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                                            >
                                                <Send className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex space-x-3">
                                        <input
                                            type="text"
                                            value={currentMessage}
                                            onChange={(e) => setCurrentMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Type your message..."
                                            disabled={isTyping}
                                            className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={isTyping || !currentMessage.trim()}
                                            className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Copilot Suggestions Section */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 h-full min-h-96">
                            <div className="p-4 border-b border-slate-200">
                                <h2 className="text-lg font-semibold text-slate-800 flex items-center">
                                    <Zap className="w-5 h-5 mr-2 text-slate-500" />
                                    Copilot Suggestions
                                </h2>
                            </div>

                            <div className="p-4 space-y-3 h-80 overflow-y-auto">
                                {suggestedQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSuggestionClick(question)}
                                        disabled={isLoading}
                                        className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-sm text-slate-700 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>

                            {/* Response Area */}
                            {(copilotResponse || isLoading) && (
                                <div className="p-4 border-t border-slate-200">
                                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                        <h3 className="text-sm font-medium text-slate-800 mb-2">AI Response:</h3>
                                        {isLoading ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                                                <span className="text-sm text-slate-500">Generating response...</span>
                                            </div>
                                        ) : (
                                            <>
                                                <p className="text-sm text-slate-700 mb-3 leading-relaxed whitespace-pre-wrap max-h-40 overflow-y-auto">{copilotResponse}</p>
                                                <button
                                                    onClick={handleCompose}
                                                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                                                >
                                                    <Edit3 className="w-4 h-4" />
                                                    <span>Compose</span>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AICopilotLanding;