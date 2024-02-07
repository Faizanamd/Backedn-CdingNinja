const path = require('path');
exports.getAbsolutePath = (filePath) => {
  // Write your code here
  const currentModuleDir = path.dirname(__filename);
  
  // Construct the absolute path of file.txt in the src directory
  const absoluteFilePath = path.join(currentModuleDir, 'src', 'file.txt');
  
  return absoluteFilePath;
};

