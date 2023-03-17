// import esbuild from 'esbuild'
// import swc from '@swc/core'
// // @ts-ignore
// import fs from 'node:fs'

// await esbuild.build({
//     entryPoints:['./index.ts'],
//     treeShaking:true,
//     bundle:true,
//     loader:{
//         './js':"js",
//         './ts':"ts",
//         './jsx':"jsx",
//         './tsx':"tsx",
//     },

//     plugins:[
//         name:"swc-loader",
//         setup(build){
//             build.onLoad({filter:/\.(js|ts|jsx|tsx)$})
//         },
//     ],

//     outdir:"dist"

// })


import esbuild from 'esbuild'//打包工具
import swc from '@swc/core'//类似于babel es6 转 es5
// @ts-ignore
import fs from 'node:fs'
await esbuild.build({
    entryPoints: ['./index.ts'], //入口文件
    bundle: true, //模块单独打包
    loader: {
        '.js': 'js',
        '.ts': 'ts',
        '.jsx': 'jsx',
        '.tsx': 'tsx',
    },
    treeShaking:true,
    define: {
       'process.env.NODE_ENV': '"production"',
    },
    plugins: [
        {
            //实现自定义loader
            name: "swc-loader",
            setup(build) {
                build.onLoad({ filter: /\.(js|ts|tsx|jsx)$/ }, (args) => {
                   // console.log(args);
                    const content = fs.readFileSync(args.path, "utf-8")
                    const { code } = swc.transformSync(content, {
                        filename: args.path
                    })
                    return {
                        contents: code
                    }
                })
            },
        }
    ],
    outdir: "dist"
})