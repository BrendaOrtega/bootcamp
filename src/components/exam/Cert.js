import * as jsPDF from 'jspdf'
import axios from 'axios'

export const certificateGenerator = (image, name, userName) => {
    if (image) getBlob(image).then((blob) => {
        const { base64 } = blob;
        const doc = new jsPDF({
            orientation: 'landscape',
        })
        const w = doc.internal.pageSize.getWidth();
        const h = doc.internal.pageSize.getHeight();

        doc.addImage(base64, 'JPEG', 0, 0, w, h);
        doc.setFontSize(28);
        doc.setFont('Helvetica');
        doc.setFontType('italic');
        doc.text(w / 2, (h / 2) - 40, userName, null, null, 'center');
        doc.save(name);
    });
};

export default function fileToURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
    });
}

export async function getBlob(url) {
    return axios.get(url, {
        responseType: 'blob',
    }).then(async ({ data }) => {
        const base64 = await fileToURL(data).then(base64Url => base64Url);
        return ({
            blob: data,
            type: data.type.split('/')[0],
            extension: data.type.split('/')[1],
            base64,
        });
    });
}