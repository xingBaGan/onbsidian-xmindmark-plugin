
Expect function
display xmindmark on obsidian https://github.com/xmindltd/xmindmark/blob/main/docs/specification.md#Relationship

Now:

![xmind demo](https://picgo1-1300491698.cos.ap-nanjing.myqcloud.com//xmind%20demo.gif)


This repo is git submodule and lerna repo.

How to run the project?

```
//First you clone the project.

cd packages/konva-xmind

//`init` to initialize your local configuration file,
git submodule init

// to fetch all the data from that project and check out the appropriate commit listed in your superproject
git submodule update
```

How to update the code?

Every you commit the submodule code you need to commit the link file on main project.


How to use the plugin?

Clone the project to your home/.obsidian/plugins directory. and build it. and the like other obsidian plugin to open it on obsidian setting panel.