# Contributing to the Essentials

## Thank you!

In the Essentials for Research Software Support modules we try to provide information about everything that University support staff needs to know about research software.
This, as you can imagine, is no easy feat, and we need your help!
First of all, therefore, thank you very much for your interest in this project, and for your willingness to contribute to it.

## TLDR: what can I do?

- Contribute to the content discussion in the [chapter issues](https://github.com/esciencecenter-digital-skills/software-support-essentials/issues?q=is%3Aissue+is%3Aopen+label%3Astory), e.g. by listing good resources for information.
- [Author a lesson](#elements-of-a-module), e.g. by:
  - [Creating slides](#slides)
  - [Designing an exercise](#exercises)
  - [Curating online resources](#online-resources)
- Review a lesson module; both by looking at [open PRs](https://github.com/esciencecenter-digital-skills/software-support-essentials/pulls), as well as flagging issues for improvement in the [existing content](https://esciencecenter-digital-skills.github.io/software-support-essentials/).
- [Provide feedback](https://github.com/esciencecenter-digital-skills/software-support-essentials/issues) on the different subjects covered: what did we miss? Should something be restructured?
- Contribute to the [video catalog](#videos) by volunteering to be interviewed.

## Target audience

The target audience for this material is University support staff who are not themselves researchers or software engineers, but who support researchers and research software engineers in creating research software.
On a practical level, this means that these modules do not need to be very technical.
For example, a module on version control does not need to explain the details of Git and the different commands.
What it does need to do is explain why version control is important, and why it matters particularly in a research context.

Another segment of the target audience is university management: those who may be involved in creating policy around research software.
For this audience, too, the material does not need to be technical.
What continues to matter is motivation and explanation of why certain things are important.

## Philosophy

Some essential principles guide the creation of this material:

### The material should be broadly usable

Both online, and offline; in a regular and a flipped classroom; and for self study.

The modules in this repository will be used as lesson materials for a live audience, and provide a resource for self-study.
Every module should therefore contain some essential classroom elements (e.g. slides, group exercises), as well as exercises that can be done individually, and reference material that can be read at home.

### The modules should be easy to (re)use

It is important that anybody can work with the material in this repository.
Slides should therefore contain exhaustive notes for an instructor, which can also be used in self-study.
Exercises should be clearly explained, and where possible, times should be given for different parts of the lesson, so that instructors can easily adapt the material to their own needs.

### Maintenance load should be kept to a minimum

We all know how fast things change, and how quickly information becomes outdated.
It is important to keep this in mind when creating lesson materials, and focus on core concepts, rather than specific tools and details.
Where it is useful to mention these, consider linking to external resources that will be maintained by others.

In general, it is better to link to external resources than to rewrite information that already exists elsewhere.
This, too, will limit the amount of maintenance that is required.

## Elements of a module

A module can contain the following elements:

- a [video](#videos), targeted at self study participants
- [slides](#slides), to be used in a classroom setting
- curated [online resources](#online-resources), both for self study and for classroom use
- [exercises](#exercises), both for self study and for classroom use

Ideally, all modules contain all elements.
In the current state of the project, however, we are aware that modules shift and may be split up or combined with others.
Therefore, the focus at this point is to accumulate material and to create a structure that makes sense.
Completing all elements will be done at a future stage.

### Online resources

The online resources are the meat of the modules.
They provide the most detailed information to relevant content, and their collection should be comprehensive.

An online resource should be linked (see [lesson philosophy](#philosophy)), but in a specific way, and with clear context:

- Why is this resource relevant?
- What is the goal of reading the resource?
- What is the expected time investment?

In addition, be clear about the part of the resource that is important.
The links should go directly to the relevant part of the resource, and if that is not possible, clear pointers (e.g. the name of sub-headers) should be provided.
If the relevant part is over before the end of the linked page, explicitly add this information before the link.

And optionally, consider adding:

- Target audience or level of the resource (e.g. "technical resource, optional")
- Discussion points for the classroom

Online resources are written in markdown, as chapters in the `modulename.md` file.
Technical information about the structure of this file [is here](#the-modulename-file).

### Exercises

Any excercises are welcome, and there are no limits to the type of exercises that can be included.
However, be explicit about the type of exercise at the top of the page:

- Should it be done live or online?
- Is it done individually or in groups, and if in groups, how big should the groups be?
- What is the expected duration of the exercise?

Furthermore, provide information on preparation for the instructor:

- What materials, if any, are necessary?
- What preparation, if any, is necessary?

If there are online resources that are relevant for the exercise, provide direct links instead of descriptions.

Finally, provide information on the expected outcome of the exercise.

Exercises are written in markdown, as chapters in the `modulename.md` file.
Technical information about the structure of this file [is here](#the-modulename-file).

### Slides

Slides are essential when teaching a module in a classroom setting.
They do not need to be long, however; a few slides to provide context and motivation is sufficient.

It is important to include notes, however brief, on ever slide.
The notes are crucial for any instructor preparing to teach with the materials.
They are also relevant for self-study participants, who can use the slides with accompanying notes to get a quick introduction to the subject.

Slides are written in markdown, and rendered with Reveal.js.
Technical information about the structure of this file [is here](#slides-with-revealjs).

### Videos

As this material is partly targeted at self-study participants, we explicitly want to include videos.
In a video, we can provide extra motivation and color for a specific topic; motivation that otherwise would be conveyed by a teacher in a classroom setting.

The videos are made from interviews with experts; likely our own RSE's at the Center, or if necessary, other experts in the field.
We care a lot about conveying passion for the subject in these videos!
Thus, if you are interested in recording a video, and there is a subject in our list of modules you feel particularly passionate about, please do [get in touch](https://www.esciencecenter.nl/team/dr-barbara-veede/).

The videos will be about 4-5 minutes long, will be shot at the center by our Communications team, and edited by a professional.
The time investment for a video is approximately 3 hours, including interview preparation, recording, and shooting some B-roll footage.

## Directory structure and content tagging

All content lives in the `static/stories` directory.

Most modules are already set up: they contain a `modulename.md` file, as well as a `_modulename/` directory.
If your module is not yet set up, please create both these inside the `static/stories/` directory.

### The `_modulename/` directory

Any files that are relevant for the module should be placed in the `_modulename/` directory.
This includes images that are linked in the `modulename.md` file, as well as slides, and images used in the slides.

When embedding images in the `modulename.md` file or slides, please use the following path: `stories/_modulename/image.png`.
While technically possible, because we want the modules to be transportable, please avoid using images from other modules.

### The `modulename.md` file

#### YAML header

The module starts with a YAML header.
For instance, the header for the SMP module looks like this:

```yaml
---
id: 1
trl: medium
category: Reusability
title: Software Management Plans
author: eScience Center
thumbnail: "nlesc-dummy.png"
---
```

The only important fields at this point are `category`, `title`, and `thumbnail`.

The `category` field should be one of the categories mentioned on the [main page](https://esciencecenter-digital-skills.github.io/software-support-essentials/).
The `title` field should be the title of the module.
The `thumbnail` field should be the name of the thumbnail image, which should be placed in the `static/stories/_modulename/` directory.
This image shows up on the index page.
Eventually, we will use customized icons for this; currently, we use dummy images.
Check any of the existing modules for an example.

Note that the path to the thumbnail image is relative to the `_modulename/` directory, as opposed to any images inside the text.

#### Chapters

A chapter (i.e. the content in a single tab) is fenced by triple colons, as follows:

```markdown
:::Chapter{headline="Why an SMP?" widemd=1}

A software management plan (SMP) can help you!
:::
```

The `headline` field is the title of the of the chapter tab.
The `widemd` field should be set to 1; this indicates that the chapter is text-based.

Between the colons, you can use markdown to format the text.

#### Chapter types

A standard chapter header looks like this:

```markdown
:::Chapter{headline="Tab text" CHAPTERTYPE}
```

Instead of `CHAPTERTYPE`, the following code can be used to refer to different types of content in the chapter:

- A text-based chapter: `widemd=1`
- A presentation chapter, which embeds slides: `presentation="path/to/slides.md"`, where the path is relative to `_modulename/`
- An embedded website: `website="https://esciencecenter.nl/"`
- A YouTube video: `video="Ps8jOj7diA0"`, where the ID is the part after `v=` in the YouTube URL
- A large image: `image="multimedia_image.avif"`, where the path is relative to `_modulename/`

### Slides with Reveal.js

Slides are written in markdown, and should be placed in the `_modulename/` directory.
The slides are embedded in the module using the `presentation` chapter type, as described [above](#chapter-types).

The slides are rendered using [Reveal.js](https://revealjs.com/).

#### Slide types

There are four different slide types:

- Title slide, `data-state="title"`
- Default slide, `data-state="standard"`
- "About us", `data-state="about"`
- "Let's stay in touch", `data-state="keepintouch"`

A slide is fenced by three dashes, and (optionally) an HTML comment that indicates the :

```markdown

---

<!-- .slide: data-state="title" -->

```

Always keep an empty line before and after the slide fence.

#### Slide content

Slide content can be written in Markdown.

To keep slides clean, use single images per slide.
Styling in Reveal is not trivial, and it is best to keep it simple.

Images can be embedded using either markdown syntax:

```markdown
![Mapping the Via Appia](stories/_smp/viaappia.png)
```

Or, for more customisation, using HTML:

```html
<center>
<img src="stories/_smp/researchcycle.png" width="60%">
</center>
```

#### Slide notes

Notes should be added at the bottom of the slide, as follows:

```markdown

Note:
Here is the text of a note.

---
```

where the `---` indicates the fence to the following slide.

## Rendering the materials locally

To render the materials locally, you need to have [Node.js](https://nodejs.org/en/) installed.
Then, run the following commands:

```bash
npm install
npm run dev
```

The materials will be available at `http://localhost:3000/software-support-essentials/` (or a different port, if 3000 is already in use).

Modifications to the text should be rendered automatically with hot reload.
Unfortunately, slides do not hot reload, and you will need to restart the server to see changes to slides.