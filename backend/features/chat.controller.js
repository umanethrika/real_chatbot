import UserRepository from '../users/user.repository.js';

export default class ChatController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  // Handle chatbot interaction
  async handleChat(req, res) {
    try {
      const userId  = "nethrika";  
      const { message } = req.body;

      // Fetch user and check remaining chats
      //const user = await this.userRepository.getUserById(userId);

      if (user.remainingChats <= 0) {
        return res.status(403).json({ message: 'Chat limit reached. Upgrade to chat more.' });
      }

      
      user.remainingChats -= 1;
      await user.save();

      
      const botResponse = `You said: ${message}. This is a placeholder response.`;

      
      return res.status(200).json({
        botMessage: botResponse,
        remainingChats: user.remainingChats
      });
    } catch (error) {
      console.error('Error during chatbot interaction:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  }
}
