import UserRepository from '../features/users/user.repository.js';

const checkChatsLimit = async (req, res, next) => {
  try {
    // const  userId  = "nethrika";
    const { userId } = req.user;  // Get user from JWT auth middleware
    const userRepository = new UserRepository();

    const user = await userRepository.getById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    if (user.remainingChats > 0) {
      return next(); 
    } else {
      return res.status(403).json({ message: 'Chat limit reached' });
    }
  } catch (error) {
    console.error('Error in checking chat limit:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export default checkChatsLimit;
