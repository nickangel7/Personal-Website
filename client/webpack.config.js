import path from 'node:path';
import process from 'node:process'
import {fileURLToPath} from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: process.env.NODE_ENV
    entry: './client/index.html',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
    }
}