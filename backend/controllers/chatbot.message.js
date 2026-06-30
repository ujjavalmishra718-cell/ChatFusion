import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
    try{
        const {text}=req.body;
        if(!text?.trim()){
            return res.status(400).json({error:"text cannot be empty"});
        }

        const user=await User.create({
            sender:"user",
            text
        })

        //Data
        const botResponses={
  "hello": "Hi! How can I help you today?",
  "hi": "Hi there! What can I do for you?",
  "hey": "Hey! Great to see you. How's it going?",
  "good morning": "Good morning! Hope you have a wonderful day ahead. How can I assist?",
  "good afternoon": "Good afternoon! How can I help you this afternoon?",
  "good evening": "Good evening! What can I assist you with tonight?",
  "can we become friend": "Yes, absolutely! I'm always happy to chat.",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name?": "I’m ChatBot, your virtual assistant.",
  "who are you": "I am your virtual assistant, here to make your life a little easier!",
  "are you human": "Nope, I'm just a bundle of code running in the cloud, but I'm doing my best to act like one!",
  "who made you": "I was created by developers to help answer your questions.",
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
  "what is the time": "I can’t see a clock, but your device should know.",
  "bye": "Goodbye! Have a great day.",
  "goodbye": "See you later! Feel free to reach out whenever you need help.",
  "exit": "Shutting down the chat session. Take care!",
  "thank you": "You’re welcome!",
  "thanks": "Anytime! Happy to help.",
  "cool": "Awesome! Let me know if you have more questions.",
  "i love you": "That’s sweet! I’m here to help you anytime.",
  "where are you from": "I live in the cloud — no rent, no bills!",
  "what can you do": "I can chat with you, answer questions, and keep you company.",
  "help": "I can help you answer basic questions, guide you through our services, or just have a quick chat!",
  "default_fallback": "I'm sorry, I didn't quite catch that. Could you please rephrase your question?",
  "not_understood": "Hmm, I'm still learning and I don't know the answer to that yet. Can we try something else?",
  "error_message": "Uh-oh, something went wrong on my end. Please try again in a moment.",
  "yes": "Awesome! Let's proceed.",
  "no": "No problem at all. Let me know if you change your mind or want to try something else.",
  "ok": "Got it! Let me know what we should do next.",
  
  "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",
  "what is java?": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",
  "what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a base condition to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",
  "what is an api": "An API (Application Programming Interface) allows two software applications to talk to each other.\n• It acts as a messenger delivering your request to a provider and bringing the response back.\n• Example: When you use a weather app, it uses an API to grab data from the weather bureau's servers.",
  "what is cloud computing": "Cloud computing is the delivery of computing services (servers, storage, databases, networking) over the internet.\n• Instead of buying physical servers, you rent them on-demand.\n• Top providers: AWS (Amazon Web Services), Microsoft Azure, Google Cloud (GCP).",
  "what is git": "Git is a distributed version control system used to track changes in source code during software development.\n• Allows multiple developers to work on the same project simultaneously without overwriting each other's work.\n• Key commands: git clone, git commit, git push, git pull.",
  "what is a database": "A database is an organized collection of structured information or data, typically stored electronically in a computer system.\n• Relational (SQL): Data stored in rows and tables (e.g., MySQL, PostgreSQL).\n• Non-Relational (NoSQL): Data stored as documents or key-value pairs (e.g., MongoDB).",
  "what is html": "HTML (HyperText Markup Language) is the standard code used to structure a web page and its content.\n• Uses tags like <h1>, <p>, and <div> to create sections, paragraphs, and links.\n• It forms the backbone of almost all websites on the internet.",
  "what is css": "CSS (Cascading Style Sheets) is the language used to style and layout web pages.\n• It controls the colors, fonts, spacing, and overall layout of an HTML document.\n• Used to make websites visually appealing and responsive across different screen sizes.",
  "what is javascript": "JavaScript (JS) is a dynamic programming language used to make web pages interactive.\n• Powers complex features like interactive maps, animated graphics, and real-time content updates.\n• Can be run on both the client-side (browser) and server-side (Node.js).",
  "what is a framework": "A framework is a pre-built set of tools, libraries, and rules that helps developers build applications faster.\n• Instead of writing everything from scratch, developers use a framework as a foundation.\n• Examples: React/Angular for web, Django for Python, and Flutter for mobile apps.",
  
  "who is prime minister of india?": "Narendra Modi is the Prime Minister of India, serving his third consecutive term since May 2014. In June 2026, he reached a historic milestone by becoming the longest-serving elected Prime Minister in India's history.\n• Represents the Varanasi constituency.\n• Key initiatives: Digital India, Startup India, Unified Payments Interface (UPI).\n• Interview Tip: Link this to digital governance or fintech revolutions if asked about infrastructure trends.",
  "what is g20": "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted a highly historic G20 summit in 2023.",
  "who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",
  "what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",
  "what is artificial intelligence": "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.\n• Key areas: Machine Learning (ML), Deep Learning, Natural Language Processing (NLP), and Computer Vision.\n• Applications: Autonomous vehicles, generative chatbots, fraud detection, and recommendation algorithms.",
  "what is the capital of india": "The capital of India is New Delhi.\n• It serves as the seat of all three branches of the Government of India (Executive, Legislative, and Judiciary).\n• Formally inaugurated as the capital in 1931.",
  "what is the internet": "The internet is a global network of billions of computers and other electronic devices linked together.\n• It uses the standard Internet Protocol Suite (TCP/IP) to allow seamless communication and data transfer worldwide.",
  
  "tell me about yourself": "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",
  "why should we hire you": "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",
  "what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",
  "what are your strengths": "Focus on professional traits backed by brief evidence.\n• Structure: Name the strength, give a quick example, and tie it back to how it helps the company.\n• Example: 'My biggest strength is my adaptability. In my last project, we had to switch our tech stack halfway through from Java to Python. I learned the basics over the weekend and kept our team project on track without missing a deadline.'",
  "what are your weaknesses": "Show self-awareness and improvement.\n• Pick a real but minor professional weakness, and always explain what you are doing to overcome it.\n• Example: 'Sometimes I find it hard to delegate tasks because I want everything to be perfect. However, I’ve realized it leads to burnout, so I've started using project management tools to trust my team and track progress effectively.'",
  "where do you see yourself in 5 years": "Show ambition paired with realistic growth inside the company.\n• Focus on mastering the domain, taking on leadership responsibilities, and contributing significantly.\n• Example: 'In 5 years, I see myself as a senior engineer who deeply understands our product architecture. I hope to mentor junior devs and lead strategic projects that drive company growth.'",
  "how do you handle stress": "Show that you stay calm, analytical, and proactive under pressure.\n• Example: 'When things get stressful, I pause and break down the workload into a prioritized checklist. I focus entirely on solving one task at a time rather than worrying about the entire backlog. Taking brief, scheduled steps away from the screen also helps keep my head clear.'"
}

        const normalizedText = text.toLowerCase().trim();
        const botResponse = botResponses[normalizedText] || "Sorry,can't understand it!!";

        const bot = await Bot.create({
            text: botResponse
        })

        return res.status(200).json({
            userMessage:user.text,
            botMessage:bot.text,
        })
            
    }catch(error){
        console.log("Error in Message Controller:",error);
        return res.status(500).json({
            error:"Internal Server Error"
        });
    }
}