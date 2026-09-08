---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Rosario'
description: "A victim of The Mansion's curse twisted beyond imagination"
image:
    url: '/Website Chara Template.png'
    alt: 'Pink circle with lighter person silohuette in the middle'
universe: "When the Apocalypse Comes"
---
<html>
<head>
  <!--change this to your oc's name or whatever you want the page title to be-->
    <title>Rosario Character Page</title>
  <!--the favicon for this page is the same "icon" image used at the top!-->
    <!--<link rel="icon" type="image/x-icon" href="images/icon.png">-->
      
<!--there's a default style for the page background, but you can set something unique per character here!-->

  </head>
    
  <body> 
    <nav>
        <ul>
            <li><a href="/characters">Back to characters page</a></li>
        </ul>
    </nav>
      <main> 
      <!--at the top we have your OC's name-->
          <h2 class="character-name">Rosario</h2>
      <!--if you don't have an image you want to use, you can remove the <img> tag
              <img src="images/icon.png" class="icon">Thyme</h2>-->
      <!--this is the little biography table, it floats to the right!-->
          <aside class="bio">
            <!--<img src="images/portrait.png">-->
              <table>
              <!--replace these with whatever info you want-->
              <tbody>
              <tr>
              <td>Nickname</td>
              <td>Ros</td>
              </tr>
              <tr>
                  <td>Occupation</td>
                  <td>Forest Ranger/"Runner"</td>
              </tr>
              <tr>
                  <td>Pronouns</td>
                  <td>she/her</td>
              </tr>
              <tr>
                  <td>Age</td>
                  <td>35</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>Protagonist</td>
              </tr>
              <!--<tr>
                  <td>Birthday</td>
                  <td>3/30</td>
              </tr>
              <tr>
                  <td>Height</td>
                  <td>170cm (5'7)</td>
              </tr>
              <tr>
                  <td>Fave Food</td>
                  <td>Shumai</td>
              </tr>-->
              </tbody></table>
          </aside>
          <section id="info">
          <h3 class="gold">Info</h3>
          <p class="quote"> "Don’t make that face, it’ll be like a camping trip. We’ll get to see the stars every night-" </p>
          <p>Rosario is the protagonist of puzzle-action otome game I've been dreaming up.</p>
          </section>
          <section id="personality">
          <h3 class="purple">Personality</h3>
          <p>Rosario is resourceful and determined. While not an optimist, she makes do as she knows she has Eva depending on her. She was taught growning up that giving up was not an option, and to pivot before quitting something.</p>
          </section>
          <section id="relationships">
          <h3 class="red">Relationships</h3>
          <!--i did categories for family, friends, and enemies, but you can come up with whatever categories make sense for your oc-->
          <h4>FAMILY</h4>
          <!--i used the detailed list element <dl> so i can write descriptions for each relationship-->
          <dl>
              <dt><!--<img src="images/no-icon.png" class="icon">-->Eva</dt>
              <dd>Her stepdaughter. Rosario has had trouble connecting with Eva ever since her dad died a few years ago. Rosario blamed herself for their distance as the loss of Eva's father (her husband) led to her being overprotective and stricter with Eva for a while in an effort to not lose Eva as well.</dd>
          </dl>
          <h4>LOVE INTERESTS</h4>
            <dl>
              <dt><!--<img src="images/no-icon.png" class="icon">-->Lars</dt>
              <dd>A longtime friend. Lars was the first neighbor that Rosario got introduced to </dd>
          </dl>
          <h4>ENEMIES</h4>
            <dl>
              <dt><!--<img src="images/no-icon.png" class="icon">-->An enemy</dt>
              <dd>does your oc have someone they don't get along with? a rival, perhaps?</dd>
            </dl>
          </section>
          <section id="Story">
          <h3 class="blue">story</h3>
          <p>you know that elaborate backstory you came up with? DROP IT HERE!</p> 
          <h4>special section</h4>
          <p>if you wrote a lot, you might want to put some headings in to break up the wall of text</p>
          <p>you can also hide sections under a spoiler warning</p>
          <details class="spoilers"><summary>SPOILER WARNING</summary>
              <p>IT WAS ALL A DREAM!!! (or something...)</p>
          </details>
          </section>
          <section id="trivia">
          <h3 class="green">Trivia</h3>
          <ul>
              <li>fun facts go here</li>
              <li>like small things you wanna share but couldn't find a good place to mention them</li>
          </ul>
          </section>
          <section id="gallery">
          <h3 class="orange">Gallery</h3> 
<!--tabs tutorial-->
<!--https://css-tricks.com/pure-css-tabs-with-details-grid-and-subgrid/-->       
    <!--change the number of pages your gallery uses in the style here-->
    <div class="gallery-grid" style="--pages:3;">     
        <!--each gallery page goes under a <details> tag-->
        <details class="gallery-page" name="g-page" style="--n:1;" open="">
        <!--the first page should say "open" at the end, since we want it open by default--> 
          <!--page name goes here-->
          <summary>page 1</summary>
          <!--a quick example gallery!-->
          <div class="img-gallery">
            <!--i made each image button a <figure> since i wanted to add captions to them-->
            <!--<a href="images/s2_bust.png">-->
              <figure>
                <!--<img src="images/s2_bust.png" loading="lazy">-->
                <figcaption>standing pose (syrup&nbsp;2)</figcaption>
              </figure>
            </a>
            <!--<a href="images/concept.png">-->
              <figure>
                <!--<img src="images/concept.png" loading="lazy">-->
                <figcaption>concept art (witch&nbsp;version)</figcaption>
              </figure>
            </a>
            <!--you can add as many as you want per page, but if your images are large it could take a bit to load them all in unless you're using smaller thumbnails as the source image.-->
            </div>
        </details>
        <!--let's make more pages!-->
        <!--make sure to change the style to "--n:2;", since that updates the variable (telling it where to put the button in the grid)-->
        <details class="gallery-page" name="g-page" style="--n:2;">
          <summary>page 2</summary>
          <div class="img-gallery">
            <!--to make an image show only after clickthrough, just put it under a details tag! the style will be inherited automatically.-->
            <details>
                <!--i marked this one as spoilers, but you can write a content warning if that's more appropriate for your image-->
                <summary>[spoilers]</summary>
                <!--<a href="images/concept2.png">-->
                  <figure>
                    <!--<img src="images/concept2.png" loading="lazy">
                    <figcaption>original concept art</figcaption>
                  </figure>
                </a>
            </details>
          <!--add more images here-->
            </div>
        </details>
        <details class="gallery-page" name="g-page" style="--n:3;">
          <summary>page 3</summary>
          <div class="img-gallery">
            <p>this page is empty!</p>
            </div>
        </details>
    </div>
      <!--here ends the image gallery-->
          </section>
          <section>
          <h3 class="pink">Links</h3>
              <ul>
              <li><a href="#">your link here</a></li>
              <!--you can remove this link lol-->
              <li>page template by <a href="https://nomnomnami.com/" target="_blank">NomnomNami</a></li>
              </ul>
          </section>
          <!--a fake comment section where you can write whatever you want!-->
          <section id="comments">
          <h2>Comments</h2>
          <article class="comment">
              <div class="user"><!--<img src="images/no-icon.png" class="icon">-->example-san<small>(+5)</small></div>
              <p>a single comment (with upvotes!)</p>
          </article>
          <!--for my pages, i make my characters talk to each other haha-->
          <article class="comment">
              <div class="user"><!--<img src="images/no-icon.png" class="icon">-->commenter</div>
              <p>the start of a comment thread.</p>
          <details class="reply"><summary>view replies (2)</summary>
              <article class="comment">
                  <div class="user"><!--<img src="images/no-icon.png" class="icon">-->reply guy</div>
                  <p>i'm replying!</p>
              </article>
              <article class="comment">
                  <div class="user"><!--<img src="images/no-icon.png" class="icon">-->commenter</div>
                  <p>stop that.</p>
              </article>
          </details>
          </article>
          <article class="comment">
              <em>[a system message, if you want to show something like that]</em>
          </article>
          </section>
          <hr>
          <nav>
              <ul>
                <li><a href="/index.html">[your site name here]</a></li>
                <li><a href="#">other relevant links</a></li>
              </ul>
          </nav>
      </main>
</body>
</html>

# Basics #
Age: 35 <br>
Gender: Cis Woman <br>
Occupation: Forest Ranger (preapocalypse), Runner (in the bunker) <br>
Role: Protagonist <br>
Race: Hispanic <br>
Related to: Eva (her stepdaughter) <br>
Universe: When the Apocalypse Comes

# Bio #
A determined woman who loves being in nature. Even since her husband died, her stepdaughter has become distant and started rebelling, despite her efforts to relate to her. She tries to be optimistic but has been hit with obstacle after obstacle, leading to many of her attempts to cheer others feeling a bit hollow. She is active and good at thinking on her feet, but is anxious and has a tendency to nag. She likes cooking and being in nature as well as classic rock. She hates overly philosophical and flaky people as well as crowds.

# Design Tidbits #
I tried my best to give her an apocalypse friendly outfit since she's outside the bunker dealing with getting supplies and fighting zombies.

# Relationships #
Eva
Lars
Nick
Michie

# Badges #
WIP

# Gallery #
WIP

