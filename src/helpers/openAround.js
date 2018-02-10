import open from './open';

export default function openAround({i, j}) {
    try {open(i - 1, j - 1)} catch(e) {};
    try {open(i - 1, j)} catch(e) {};
    try {open(i - 1, j + 1)} catch(e) {};
    try {open(i, j - 1)} catch(e) {};
    try {open(i, j + 1)} catch(e) {};
    try {open(i + 1, j - 1)} catch(e) {};
    try {open(i + 1, j)} catch(e) {};
    try {open(i + 1, j + 1)} catch(e) {}; 
}
