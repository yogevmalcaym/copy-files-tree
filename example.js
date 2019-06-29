const copyFilesSync = require('./index').copyFilesSync;

const filesData = {
    'source-folder-path': {
        foldersAndFiles: ['1.png'],
        destination: 'destination-folder-path',
        options: {
            allDirectories: true
        }
    },
    'source-folder-path': {
        foldersAndFiles: ['1.png', '2.png'],
        destination: 'destination-folder-path'
    },
    'source-folder-path': {
        destination: 'destination-folder-path',
        options: {
            allFiles: true,
            allDirectories: true
        }
    }
};


copyFilesSync(filesData);
