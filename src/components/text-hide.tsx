'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ExpandableTextProps {
  text: string;
}

const ExpandableText = ({ text }: ExpandableTextProps) => {
  const [showFull, setShowFull] = useState(false);
  const isLong = text.length > 15;

  const previewText = text.slice(0, 15) + '...';

  const toggleText = () => setShowFull((prev) => !prev);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.p
          key={showFull ? 'full' : 'preview'}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden">
          {showFull ? text : previewText}
        </motion.p>
      </AnimatePresence>

      <motion.button
        onClick={toggleText}
        className=""
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
        {showFull ? 'Hide' : 'See more'}
      </motion.button>
    </div>
  );
};

export default ExpandableText;
