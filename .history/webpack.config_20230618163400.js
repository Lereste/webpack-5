const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: Là file webpack sẽ bắt đầu làm việc và thực hiện viêc nạp file để thực hiện việc bundler, nó sẽ đi từ file mà bạn chọn
    entry: './src/index.js', 
    // output: Nó sẽ chỉ cho webpack biết cần phải lưu file sau khi được compile ra đâu
    output: {
        // filename: 'bundle.[contenthash].js',
        filename: 'bundle.js', // tên của file đầu ra
        path: path.resolve(__dirname, './dist'), // nơi chứa file đầu ra
        publicPath: '', // bắt buộc phải có "/"
        clean: {
            dry: true, // hiển thị những file sẽ xoá thay vì xoá nó
            keep: /\.css/
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        }
    },
    mode: 'none',
    module: {
        rules: [

/*
    Resource: Nếu ta dùng module này, thì khi webpack biên dịch các tệp, nó sẽ được lưu vào trong folder dist (nằm ngoài file bundle.js)
        *Không biên dịch được text*
*/
            // {
            //     test: /\.(png|jpg|svg)$/,
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.(txt)$/,
            //     type: 'asset/resource'
            // },


/*
    Inline: Nếu ta dùng module này, thì khi webpack biên dịch các xong tệp (ở đây là png và jpg), nó sẽ được lưu vào trong file bundle.js 
        *Không biên dịch được text*
    Module.exports: Là những chuỗi bao gồm chữ và số ngẫu nhiên có thể đọc được.
*/
            // {
            //     test: /\.(png|jpg|svg)$/,
            //     type: 'asset/inline' 
            // },
            // {
            //     test: /\.(txt)$/,
            //     type: 'asset/inline' 
            // },


/*
    Source: Nếu ta dùng module này, thì khi webpack biên dịch các xong tệp (ở đây là png và jpg), nó sẽ được lưu vào trong file bundle.js
    Module.exports: Là những chuỗi bao gồm những ký tự đặc biệt. Không thể biên dịch đc ảnh, chỉ biên dịch được chữ
*/
            // {
            //     test: /\.(png|jpg|svg)$/,
            //     type: 'asset/source'
            // },
            // {
            //     test: /\.txt$/,
            //     type: 'asset/source'
            // },


/*
    Asset: Khi để mỗi "asset" thì nếu file được biên dịch:
        - Nhỏ hơn 8kb sẽ được lưu vào inline (bundle.js)
        - Lớn hơn 8kb sẽ được lưu vào resource (ngoài file bundle.js)
*/
            // {
            //     test: /\.(png|jpg|svg)$/,
            //     type: 'asset'
            // },
            // {
            //     test: /\.txt$/,
            //     type: 'asset'
            // },


/*
    Condition: Tuỳ chỉnh điều kiện cho type asset, để lưu file đã biên dịch vào đâu
        Ở đây là file "example.txt" nhỏ hơn 4kb nên sẽ đc chuyển là inline (lưu vào bundle.js), ảnh đc lưu ngoài bundle.
*/
            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
            },
            {
                test: /\.txt$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                },
            },
            

/*
    Loader: Cấu hình loader dùng để biên dịch các ngôn ngữ khác nhau
    Nếu muốn dùng css trong webpack thì bạn phải cài `style-loader` và `css-loader`
    Muốn dùng thêm sass thì phải cài thêm `sass` và `sass-loader`
        ___CSS_LOADER_EXPORT___
*/
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader',
                ]
            },


/* 
    Babel: dùng để biên dịch code JS thành các phiên bản cũ hơn
    Nếu code của chúng ta có cú pháp của version javascript ES2023, thì những trình duyệt cũ chỉ chạy được ES6 sẽ không thể hiểu được code và dẫn đến lỗi.
    Vì thế chúng ta cần chuyển đổi code thành các version cũ hơn.
*/
            {
                test: /\.js$/,
                exclude: '/node_modules', // exclude 'node_modules' vì quá trình biên dịch code nặng và chậm
                use: {
                    loader: 'babel-loader', // dùng để tích hợp babel vào webpack
                    options: {
                        presets: ['@babel/env'] // là thiết lập sẵn cho từng đối tượng môi trường
                    }
                }
            },

/*
    Plugin: MiniCssExtractPlugin
*/ 
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader, 'css-loader',
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
            //     ]
            // },
        ]
    },
    plugins: [
        // new TerserPlugin(),

        // new MiniCssExtractPlugin(
        //     {
        //         filename: 'styles.[contenthash].css'
        //     }
        // ),

        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         '*/*',
        //         path.join(process.cwd(), 'build/*/*')
        //     ]
        // }),

        // new HtmlWwebpackPlugin({
        //     title: 'Ho Hoang Hao - Webpack',
        //     filename: 'custom-index.html',
        //     meta: {
        //         description: 'some description'
        //     }
        // })
    ]
}

