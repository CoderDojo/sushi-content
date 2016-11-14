# sushi-content
This repository contains the source files for most of the Sushi Cards produced and released by the CoderDojo Foundation from 2016 onwards.

## Working with this repository
Whether you are planning to create new Sushi Cards or translate existing ones, you will need to follow these steps to submit pull requests to this repository.

1. You need to install and [setup Git for GitHub](https://help.github.com/articles/set-up-git/) if you haven't already.
2. Log in to your GitHub account and click the "Fork" button on the [Sushi Content repository page](https://github.com/CoderDojo/sushi-content).
3. You need to go to your fork (on your profile) and clone the repository by running `git clone https://github.com/YourUserName/sushi-content` in your command line. This will create a sushi-content folder in the current directory with all the files you need to manage it.
4. Now create an appropriate directory inside the repo (see **Creating Sushi Cards** or **Translating Sushi Cards** below for details) and add your new/translated content inside it.
5. Run the command `git add path/to/your/new/directory` which adds those new files as part of your commit (the list of changes you'll be asking me to merge into the main repo).
6. Run `git status` to check you haven't missed any files
7. Assuming all is good, run `git commit -m 'Some message explaining your changes, e.g. Added Spanish translation of Beginner Python Sushi Cards'`.
8. Run `git push origin` to submit the changes to your fork of the project.
9. Go back to GitHub and go to [the CoderDojo copy of the repo](https://github.com/CoderDojo/sushi-content). Click *"New pull request"* and follow the subsequent prompts to request your fork be merged back into the CoderDojo repository.
10. I will receive your pull request, review it and potentially suggest some edits. Once we agree that it's ready it will be added to this repository.

## Creating Sushi Cards
I recommend that you use the [Chopsticks](https://www.npmjs.com/package/sushi-tool) tool to create your Sushi Cards and follow its prompts. **Note that where Chopsticks asks for the name of the subject, it is expecting a lower case answer. For example HTML should be entered as html**.

If you are adding a completely new subject, for example Ruby, then create a new directory at the top of the repository named in lowercase for the subject.

If you are adding a new level to an existing subject (or one you just created), please add the appropriate level (beginner, intermediate or advanced) subdirectory underneath the subject directory, and then create a language directory for the language you are writing in, using the ISO 369-1 code for that language as defined on [this list](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For example, if I was creating beginner Ruby content in English I would use `ruby/beginner/en`.

### Adding new subjects/languages
If you need a new subject or language added (with associated colours etc.) please open an issue against the [Sushi Card Generator project](https://github.com/CoderDojo/sushi-gen).

## Translating Sushi Cards
If translating an existing Sushi Card series, please create a language directory for the language you are writing in, using the ISO 369-1 code for that language as defined on [this list](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For example, if I was creating translating the beginner level Ruby Sushi Cards into Spanish I would create `ruby/beginner/es`.
