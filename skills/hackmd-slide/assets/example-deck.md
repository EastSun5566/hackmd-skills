---
title: Ship the smallest useful change
description: A short talk about making changes easier to review
lang: en
slideOptions:
  theme: white
  transition: none
  slideNumber: true
---

<!-- .slide: data-background-color="#e8f4ff" -->

# Ship the smallest useful change

A practical approach to clearer reviews

Note:
Introduce the goal: make one useful change easy for another person to understand.
This six-slide deck includes one vertical detail slide. Use Space to visit every slide.

---

## Three questions before you start

- What problem are we solving? <!-- .element: class="fragment" data-fragment-index="0" -->
- What is the smallest useful outcome? <!-- .element: class="fragment" data-fragment-index="1" -->
- How will we know it works? <!-- .element: class="fragment" data-fragment-index="2" -->

Note:
Reveal each question as you explain it.
Use an example from the audience's work to connect the three questions.

---

## Keep the change focused

One observable behavior, one clear explanation.

Save unrelated cleanup for a separate change.

Note:
Explain that a focused change can still touch several files.
The next vertical slide illustrates the same idea in more detail.

----

## Example: greet more than one person

| Include | Save for later |
| --- | --- |
| Accept a list of names | Redesign the whole application |
| Return one greeting per name | Replace the logging library |
| Check the empty-list case | Rename unrelated modules |

Note:
This is supporting detail beneath the previous slide, not a new main topic.
Discuss why each included item is necessary for the stated behavior.

---

## Make the behavior visible

```javascript [1|2-3|4]
const attendees = ['Ada', 'Lin'];
const greetings = attendees
  .map(name => `Hello, ${name}`);
console.log(greetings.join('\n'));
```

Note:
Step through the input, transformation, and output.
Point out that an empty list produces no greetings, then discuss the appropriate check.

---

<!-- .slide: id="takeaway" data-background-color="#e8f4ff" -->

## Make the next review easy

State the problem. Keep the change focused. Show that it works.

What is one change you could make smaller today?

Note:
Return to the opening goal and invite one concrete example from the audience.
Leave time for questions rather than adding another dense summary slide.
