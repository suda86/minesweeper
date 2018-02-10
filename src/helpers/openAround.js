import opening from './open';

export default function openAround({i, j, ...props}, open = opening) {
    try {open({ i: i - 1, j: j - 1, ...props})} catch(e) {};
    try {open({ i: i - 1, j: j, ...props})} catch(e) {};
    try {open({ i: i - 1, j: j + 1, ...props})} catch(e) {};
    try {open({ i: i, j: j - 1, ...props})} catch(e) {};
    try {open({ i: i, j: j + 1, ...props})} catch(e) {};
    try {open({ i: i + 1, j: j - 1, ...props})} catch(e) {};
    try {open({ i: i + 1, j: j, ...props})} catch(e) {};
    try {open({ i: i + 1, j: j + 1, ...props})} catch(e) {}; 
}
