import axios from 'axios';

const LocalStorageClient = async key => localStorage.getItem(key);

export default LocalStorageClient;