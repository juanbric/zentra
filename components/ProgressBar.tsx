import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [readingProgress, setReadingProgress] = useState(0);
    useEffect(() => {
        function calculateReadingProgress() {
          const progress =
            window.scrollY / (document.body.scrollHeight - window.innerHeight);
          setReadingProgress(progress);
        }
    
        window.addEventListener("scroll", calculateReadingProgress);
        return () => window.removeEventListener("scroll", calculateReadingProgress);
      }, []);
    

  return (
    <div className="progress-container">
    <div
      className="progress-indicator"
      style={{ width: `${readingProgress * 100}%` }}
    />
  </div>
  )
}

export default ProgressBar