import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const adsDirectory = path.join(process.cwd(), 'pages/api/ads');
  const fileNames = fs.readdirSync(adsDirectory);
  const adsData = fileNames.map(fileName => {
    const fullPath = path.join(adsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);

    return data;
  });

  res.status(200).json(adsData);
};