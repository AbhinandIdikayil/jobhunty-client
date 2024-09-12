


export const validateImage = (file:File) => {
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return allowedFileTypes.includes(file.type);
}