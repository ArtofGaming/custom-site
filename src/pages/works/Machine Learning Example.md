---
layout: '../../layouts/WorkLayout.astro'
title: 'Machine Learning Example'
description: 'Training a cube to reach a goal.'
author: 'Campbell Turner'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
theme:
    back-color: "white"
---

<style is:global>
    div{
        background-color: var(back-color);

    }
    h4{
        color: rgb(228, 157, 126);
        margin-bottom: -.5ch;
        text-align: center;
    }
</style>

<p style="border-color: rgb(228, 157, 126); border-width: 7px; border-style: dashed; padding: 2px; text-align: center">
    This was made following a <a style="color: white"href='https://www.youtube.com/watch?v=zPFU30tbyKs&list=PLzDRvYVwl53vehwiN_odYJkPBzcqFw110&index=1&t=243s'>Code Monkey Tutorial</a>
    <p>
    See it in action <a style="color: white"href='https://artofgaming.github.io/test1/Build/'>here</a>
    </p>
    See code <a style="color: white"href='https://github.com/ArtofGaming/test1?tab=readme-ov-file'>here</a>

</p>

### Brief Description
To learn more about AI, I tried using Machine Learning to train an agent (the cube) to reach a specific goal which moves each iteration to ensure the agent is not just learning to retrace a specific path but truly learning how to look for and reach the goal. The AI will be punished if it falls off it's play area and if it fails to reach the target within the time limit. To speed up the learning process, several trials are run at once, as shown by playing the scene.

### What I Learned
Despite being a fan of "AI learns to [insert thing here]" videos, I had never tried it myself. The first thing that surprised me was the importance of running many trials at once. It's quite easy to take for granted how difficult it could be for an agent to learn not only how to look for a target but move in the first place. Because of this running too few simulations is laughably inefficient.