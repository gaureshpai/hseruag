
import fs from 'fs';
import path from 'path';

export interface Certificate {
    title: string;
    screenshot: string;
}

export const priorityNumbers = [11, 19, 31, 32, 24, 13, 33];

const extractNumber = (filename: string) => {
    const match = filename.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
};

export const getCertificates = (limit?: number): Certificate[] => {
    const certsDir = path.join(process.cwd(), 'public', 'certs');
    const filenames = fs.readdirSync(certsDir);

    const priorityCertificates = filenames
        .filter(filename => priorityNumbers.includes(extractNumber(filename)))
        .map(filename => ({
            title: path.parse(filename).name,
            screenshot: `/certs/${filename}`
        }));

    const otherCertificates = filenames
        .filter(filename => !priorityNumbers.includes(extractNumber(filename)))
        .map(filename => ({
            title: path.parse(filename).name,
            screenshot: `/certs/${filename}`
        }))
        .sort(() => Math.random() - 0.5);

    const allCertificates = [...priorityCertificates, ...otherCertificates];

    if (limit) {
        return allCertificates.slice(0, limit);
    }

    return allCertificates;
};
