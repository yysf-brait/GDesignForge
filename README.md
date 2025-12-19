# GDesignForge

## 简介

本仓库是 Brait 的个人网站[forge.braitv.com](https://forge.braitv.com)的存储库，一个专注于游戏设计的知识熔炉。

开放本仓库主要有两个目的：

- 为未来的多人异步协作提供便利
- 满足评论功能`Giscus`（或者其他类似工具）的先决条件

## 许可

本项目采用 **双重许可证** 策略。

### 代码部分

本站点的源代码（基于 Quartz 修改）采用 [MIT License](LICENSE) 授权。

### 内容部分

本站全部内容（`content/**`）默认采用 **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)** 协议。[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

这意味着在**非商业用途**下，您可以自由转载和修改，但必须：

1. **署名**：保留原作者信息及原文链接。
2. **相同方式共享**：如果您修改了内容，必须使用相同的协议分享。

详细的协议要求请参见 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)。

#### 致游戏从业者/项目组：关于“商业化”的界限说明

虽然本站限制商业使用（NC），但我**非常欢迎**游戏从业者或项目组参考本站的**设计理念**进行创作。  
为了避免歧义，具体界限说明如下：

✅ **允许（无需授权）：**

- 学习或者借鉴本站的抽象内容，如游戏设计理论、数值模型、交互逻辑、机制灵感等
- 并将其**通过您自己的代码/实现**应用于您的商业游戏产品中

❌ **禁止（需授权）：**

- 直接复制本站的内容，如文字原稿、剧情文本、美术素材或具体的数据表格
- 并将其**直接填充**进您的商业游戏产品中

如果您对界限划分存疑，或希望申请商业授权，请务必通过邮件（见下文）与我联系。

### 商业授权与联系

**联系邮箱**：[brait.w216@gmail.com](mailto:brait.w216@gmail.com)

如果您属于上述“禁止”的范畴，但希望将本站内容用于商业用途（包括但不限于出版、付费课程、商业媒体转载、直接素材使用），请务必通过邮件联系我获取单独授权。

*注：本站不仅包含我个人的原创内容，也包含社区贡献者的智慧。*

*任何涉及社区贡献内容的商业化使用，可能需要同时获得相关贡献者的许可，除非您仅使用我拥有完全版权的部分。*

*发表的评论，其版权归属评论者本人，但默认允许本站公开展示。*

### 引用内容与第三方版权

本站出于学习、研究和评论的目的，可能会引用第三方内容，包括但不限于文字、图片、代码片段、数据等。

对于这部分内容，本站遵循以下原则：

1. **版权归属**：除非特别声明，所有引用内容的版权均归原作者或其授权实体所有。本站的使用不代表拥有或主张其版权。
2. **明确标注**：对于引用的内容，我会尽最大努力在引用的上下文中通过链接、注释等形式，清晰地标注来源作者与原始链接。
3. **合理使用**：本站对外部内容的引用遵循“合理使用”原则，旨在进行介绍、评论或知识分享，而非替代原文。
4. **非商业用途**：引用内容的目的仅限于知识分享，本站承诺不会在无授权时对外部内容进行任何商业化利用。
5. **侵权处理**：我尊重并保护每一位创作者的知识产权。如果您是某项内容的版权所有者，并认为本站的引用行为侵犯了您的权益，请随时通过邮件 [brait.w216@gmail.com](mailto:brait.w216@gmail.com) 与我联系。我将在收到通知后第一时间核实并进行删除或更正。

## 开发&协作

### 署名须知

无论你是使用何种方式投稿文章或内容，**请务必附带你的署名信息**以保留你的创作权益。

对于**Markdown**格式的投稿文件，请使用 **Metadata** 来显性标识作者信息，示例如下：

```markdown
---
title: 文章标题
author: 你的署名
tags:
  - "u/你的署名"
---
文章正文内容...
```

对于其他文本格式的投稿文件，请在正文中**注明作者署名**。

### 协作指南

当你想直接通过 `GitHub` 提交你的代码或者文章时，请阅读以下指南。

以下指南会涉及对于 `Git` 和 `GitHub` **新手**来说**较为复杂**的操作步骤。

如果你仅仅想要撰写文章而不熟悉 `Git` 和 `GitHub`，以下建议或许对你有帮助：

你可以考虑将文章内容通过邮件发送给我 [brait.w216@gmail.com](mailto:brait.w216@gmail.com)，我会帮你将内容合并到仓库中。

当然，这会**丢失你的贡献记录**，并且这会增加我的工作量，从而导致**处理时间变长**。
在极端情况下，我可能无法处理所有的来稿，从而导致你的文章被拒绝或者遗漏。

如果你希望长期参与协作，建议你花时间学习 `Git` 和 `GitHub` 的基础知识，掌握基本的操作技能。
建议你**将本文档传递给LLM模型**（如ChatGPT、Gemini、DeepSeek等），告知它你的开发环境与工具链，让它帮助并指导你完成这些步骤。

我们将采用标准的 **Fork & Pull** 流程来确保协作的顺畅。

由于每个人所使用的开发环境、工具链、使用习惯可能各不相同，本文档仅提供一个通用的协作流程指导，具体细节请根据你的实际情况进行调整。

### 1. Fork and Clone

无论你是想要提交代码还是文章，你都需要先 Fork 本项目到你的个人账户下，然后 Clone 到你的本地。

Fork 相当于在你的 GitHub 账户下创建了一个项目的完整副本，你对这个副本有完全的写权限。

1. 打开 `https://github.com/yysf-brait/GDesignForge` 页面。
2. 点击页面右上角的 **Fork** 按钮。
3. GitHub 会将该仓库复制到你的账户下。完成后，你会跳转到 `https://github.com/你的用户名/GDesignForge` 这个页面。

接下来，你需要将你 Fork 后的仓库 Clone 到你的本地计算机上。

**注意：** 你需要 Clone 的是你 Fork 后的仓库，而不是原始仓库。

```bash
# 将下面的 URL 替换成你 Fork 后的仓库地址（即你的用户名下的仓库）
git clone https://github.com/你的用户名/GDesignForge.git

# 进入项目目录
cd GDesignForge
```

### 2. 设置 Upstream

为了让你的本地仓库能够简单的获取原始仓库的最新更新（防止代码冲突），你需要将原始仓库设置为 `upstream`。

```bash
# 添加原始仓库为 upstream
git remote add upstream https://github.com/yysf-brait/GDesignForge.git

# 验证设置是否成功
git remote -v
```

你应当看到 `origin` 指向你的仓库，`upstream` 指向 `yysf-brait` 的仓库。

### 3. 创建分支

**请勿直接在 `main` 分支上进行修改。** 养成良好的习惯，为每一个新的修复或功能创建一个独立的分支。

```bash
# 首先确保你的主分支是最新的
git checkout main
git pull upstream main

# 创建并切换到新分支
# 分支名建议具有描述性，例如: fix-typo-readme, feat-new-article
git checkout -b <你的分支名称>
```

### 4. 撰写代码

本项目是[Quartz](https://github.com/jackyzha0/quartz)的一个部署实例。

你可以参阅[Quartz 官方文档](https://quartz.jzhao.xyz)开始使用和开发。

如果你成功完成了上述所有步骤，项目初始化不需要如[Quartz 官方文档](https://quartz.jzhao.xyz)中所述的全部命令。你只需要执行下面的命令即可：

```shell
# 你不需要执行这一行了，因为你已经 Clone 了本项目
# git clone https://github.com/jackyzha0/quartz.git
# 你需要进入你的项目目录，请按需修改下面的命令
# cd quartz
# 这是你必须执行的初始化命令，这会安装所有依赖并创建必要的文件
npm i
# GDesignForge 不是一个全新的 Quartz 项目，所以不需要执行下面的命令
# npx quartz create
```

无论是基础操作（如构建网站、编辑文章等）还是更多高级操作（如创建组件、修改布局等），请继续参考 [Quartz 官方文档](https://quartz.jzhao.xyz)。

你可以优先参考[quartz的官方文档 在本地运行](https://quartz.jzhao.xyz/build)，该文档将指导你预览网站的效果。

### 5. 撰写文章

所有文章内容均以 Markdown 格式存放在 `content/` 目录下。

如[Quartz的官方文档 创作内容](https://quartz.jzhao.xyz/authoring-content)中所述的那样，`GDesignForge` 也建议你使用 [Obsidian](https://obsidian.md/)来编辑和维护`content/`目录。

为了保证你的 Obsidian 设置与 `GDesignForge` 不发生冲突，你需要进行以下设置调整：
Obsidian -> 设置 -> 文件与链接 -> 链接 -> 内部链接类别，将“尽可能简短的形式”设置为“基于仓库根目录”。

建议你使用 Obsidian 时，将 `content/` 目录作为仓库在 Obsidian 中打开，而非整个仓库根目录。
这样可以避免 Obsidian 误将其他配置文件（如 `.gitignore`、`package.json` 等）纳入笔记管理范围。

### 6. 提交更改

当你完成了一些代码修改或文章撰写后，你可以提交你的更改到本地仓库。

```bash
# 将修改添加到暂存区
git add .

# 提交修改
# 请填写清晰、简洁的提交信息，说明你做了什么
git commit -m "Docs: 新增了一篇关于设计的文章"
```

你可以多次重复修改和提交，直到你完成所有的更改。

### 7. 同步与推送

为了保持提交历史的整洁（线性历史），在提交 PR 之前，如果上游仓库有了更新，我们推荐使用 **Rebase** 而不是 Merge 来同步代码。

#### 1. 拉取并变基

```bash
# 获取 upstream 的最新代码，但不自动合并
git fetch upstream

# 将你的分支变基到 upstream/main
# 这会将你的提交暂时“拿下来”，更新基准代码后，再将你的提交“贴”回去
git rebase upstream/main
```

#### 2. 处理冲突 (如果有)

如果在变基过程中出现冲突，终端会提示你。请按以下步骤操作：

1. 打开冲突文件，手动解决冲突。
2. 将解决后的文件添加到暂存区：`git add .`。
3. **不要**运行 `git commit`，而是继续变基 `git rebase --continue`。
4. 重复上述步骤，直到变基完成。

#### 3. 推送到 GitHub

由于 Rebase 修改了提交历史，如果你的分支之前已经推送到过 GitHub，普通的 `git push` 会失败。你需要使用强制推送：

```bash
# 将你的分支强制推送到你的 Fork 仓库
# 注意：仅在你是该分支唯一开发者时使用强制推送
git push origin <你的分支名称> --force
```

> **⚠️ 注意：** 强行推送（`--force`）会覆盖远程分支的历史。请务必确认**只有你一个人**在使用这个 Fork 的分支，否则会导致代码丢失。

### 8. 提交 Pull Request

这是最后一步。

1. 打开你 Fork 的仓库页面：`https://github.com/你的用户名/GDesignForge`。
2. GitHub 通常会自动检测到新推送的分支，并显示 **Compare & pull request** 按钮。如果未显示，请点击 "Pull requests" 标签页 -> "New pull request"。
3. 确保比较的基准（Base）是 `yysf-brait/GDesignForge` 的 `main` 分支，对比的是你刚才推送的分支。
4. 填写标题和描述：
   1. **标题**：简洁概括你的修改。
   2. **描述**：详细说明你修改了什么，如果是修复 Bug，请关联对应的 Issue 编号。
5. 点击 **Create pull request**。

### 9. 等待审查

维护者会审查你的 PR。如果需要修改，你只需在本地继续修改并 Commit，然后再次 Push 到同一个分支即可，PR 会自动更新。

**感谢你的贡献！**
