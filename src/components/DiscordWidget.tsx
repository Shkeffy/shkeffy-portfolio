import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DiscordWidget = () => {
  const [serverInfo, setServerInfo] = useState<{ presence_count?: number } | null>(null);

  useEffect(() => {
    fetch('https://discord.com/api/guilds/1029189562204962816/widget.json')
      .then(res => res.json())
      .then(data => setServerInfo(data))
      .catch(console.error);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between w-full bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-800/50"
    >
      <div className="flex items-center space-x-4">
        <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
        </svg>
        <div>
          <span className="text-white font-medium">the network</span>
          <p className="text-gray-400 text-sm">{serverInfo?.presence_count || '...'} members online</p>
        </div>
      </div>
      <a 
        href="https://discord.gg/networkers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center"
        >
          join
        </motion.button>
      </a>
    </motion.div>
  );
};

export default DiscordWidget; 