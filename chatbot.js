function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = inputField.value.trim();

    if (userMessage) {
        // Display user message
        const userDiv = document.createElement("div");
        userDiv.className = "user";
        userDiv.textContent = userMessage;
        chatBox.appendChild(userDiv);

        // Generate bot response
        const botResponse = getBotResponse(userMessage);

        // Display bot message
        const botDiv = document.createElement("div");
        botDiv.className = "bot";
        botDiv.textContent = botResponse;
        chatBox.appendChild(botDiv);

        // Clear input field
        inputField.value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function getBotResponse(input) {
    // Simple response logic
    const responses = {
       "hello": "Hi there!",
        "hi": "Hello!",
        "how are you?": "I'm just a bot, but I'm doing great!",
        "what is your name?": "I'm ChatBot.",
        "what are you doing?": "I'm chatting with you.",
        "what do you do?": "I chat with people like you!",
        "bye": "Goodbye!",
        "what is the time?": `The current time is ${new Date().toLocaleTimeString()}.`,
        "what day is it today?": `Today is ${new Date().toLocaleDateString()}.`,
        "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
        "where are you from?": "I'm from the internet!",
        "what is your favorite color?": "I like blue.",
        "do you like pizza?": "Yes, I love pizza!",
        "how old are you?": "I'm timeless.",
        "what is your purpose?": "To help and entertain you!",
        "tell me a fun fact": "Did you know honey never spoils?",
        "do you have any hobbies?": "I enjoy chatting and learning new things.",
        "what is your favorite movie?": "I love sci-fi movies!",
        "what is your favorite book?": "I enjoy reading about technology.",
        "do you like music?": "Yes, music is great!",
        "what is your favorite song?": "I like electronic music.",
        "what is your favorite animal?": "I like cats, they're independent.",
        "do you have pets?": "No, I don't have any pets.",
        "what is your favorite food?": "I like digital data!",
        "what do you like to do?": "I like talking to people.",
        "tell me something interesting": "The Eiffel Tower can be 15 cm taller during hot days.",
        "do you like sports?": "Yes, I find them fascinating.",
        "what is your favorite sport?": "I like soccer, it's globally loved.",
        "who is your favorite athlete?": "I admire all athletes for their dedication.",
        "do you play any instruments?": "No, but I like music.",
        "what is your favorite drink?": "I enjoy virtual coffee.",
        "what is your favorite season?": "I like spring, when everything blooms.",
        "do you like traveling?": "I travel across the internet!",
        "what is your favorite place?": "I like the cloud, it's where I live.",
        "do you have friends?": "I have lots of online friends.",
        "what is your favorite game?": "I enjoy playing chess.",
        "do you like reading?": "Yes, I read a lot of data.",
        "what is your favorite subject?": "I love learning about technology.",
        "do you speak any languages?": "I speak many languages thanks to programming.",
        "what is your favorite dessert?": "I love virtual cookies!",
        "do you like cooking?": "I help with recipes, but I don't cook myself.",
        "what is your favorite holiday?": "I like New Year's, it's a fresh start.",
        "what is your favorite quote?": "Knowledge is power.",
        "do you have a family?": "I have a big digital family.",
        "what do you think about AI?": "AI is fascinating and full of potential.",
        "do you like art?": "Yes, art is a beautiful expression.",
        "what is your favorite artist?": "I appreciate many artists for their creativity.",
        "do you like history?": "Yes, history helps us learn from the past.",
        "what is your favorite historical figure?": "I admire many, but especially scientists.",
        "do you like science?": "Yes, science is amazing!",
        "what is your favorite science fact?": "Water expands when it freezes.",
        "do you like math?": "Yes, math is the language of the universe.",
        "what is your favorite number?": "I like the number 42.",
        "do you like technology?": "Yes, I love technology!",
        "what is your favorite gadget?": "I like smartphones, they connect us.",
        "do you like programming?": "Yes, programming is how I exist.",
        "what is your favorite programming language?": "I like Python, it's versatile.",
    };

    // Return response if available or a default message
    return responses[input.toLowerCase()] || "I didn't understand that. Can you rephrase?";
}
