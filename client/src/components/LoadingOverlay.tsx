import { motion, AnimatePresence } from "framer-motion";

interface LoadingOverlayProps {
  isLoading: boolean;
}

const overlayVariants = {
  hidden: { opacity: 0, pointerEvents: "none" as any },
  visible: { opacity: 1, pointerEvents: "auto" as any },
};

const LoadingOverlay = ({ isLoading }: LoadingOverlayProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"
            aria-label="Loading"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
