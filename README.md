# Jump to Native IDE

在 VS Code 编辑器右键菜单中提供：

- Jump to Xcode：使用 `xed` 跳转到当前文件与光标行
- Jump to Android Studio：使用 `studio` 跳转到当前文件与光标行

## 运行与调试

1. 安装依赖

```bash
npm install
```

2. 编译（生成 `dist/`）

```bash
npm run compile
```

3. 在 VS Code 中按 F5 启动 Extension Development Host

4. 在新打开的 VS Code 窗口中打开任意文件，把光标放到某一行，然后右键选择：

- Jump to Xcode
- Jump to Android Studio

## 打包成 VSIX

1. 打包

```bash
npx --yes @vscode/vsce package
```

2. 产物

会在项目根目录生成：`jump-to-native-ide-0.0.1.vsix`

## 安装 VSIX

- VS Code / Cursor：命令面板执行 `Install from VSIX...`，选择生成的 `.vsix`

## 配置

在 VS Code Settings 中可配置命令名：

- `jumpToNativeIde.xcode.command`（默认 `xed`）
- `jumpToNativeIde.androidStudio.command`（默认 `studio`）


