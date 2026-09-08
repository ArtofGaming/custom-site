---
layout: '../../layouts/CharaWorldLayout.astro'
title: 'Test'
description: "You think your middle school years sucked? Try being a teen in the apocalypse."
image:
    url: '/Website Chara Template.png'
    alt: 'The Astro logo on a dark background with a pink glow.'
universe: "When the Apocalypse Comes"
theme:
    back-color: "white"
---
<html>
<head>
  <!--change this to your oc's name or whatever you want the page title to be-->
    <title>My Character Gallery</title>
  <!--the favicon for this page is the same "icon" image used at the top!-->
    <!--<link rel="icon" type="image/x-icon" href="images/icon.png">-->
      
<!--there's a default style for the page background, but you can set something unique per character here!-->

  </head>
    
  <body> 
   <nav>
              <ul>
                <li><a href="/characters">Back to characters page</a></li>
          </nav>
      <main> 
      <!--at the top we have your OC's name-->
          <h2 class="character-name">Test</h2>
      <!--if you don't have an image you want to use, you can remove the <img> tag
              <img src="images/icon.png" class="icon">Thyme</h2>-->
      <!--this is the little biography table, it floats to the right!-->
          <aside class="bio">
            <!--<img src="images/portrait.png">-->
              <table>
              <!--replace these with whatever info you want-->
              <tbody><tr>
                  <td>Title</td>
                  <td>Temporal Witch</td>
              </tr>
              <tr>
                  <td>Pronouns</td>
                  <td>she/her</td>
              </tr>
              <tr>
                  <td>Age</td>
                  <td>22</td>
              </tr>
              <tr>
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
              </tr>
              </tbody></table>
          </aside>
          <section id="info">
          <h3 class="gold">Info</h3>
          <p class="quote"> put a quote or the elevator pitch for your oc here </p>
          <p>write out some info like if your OC is from something. do you have a webcomic or gallery with art of them? tell people where to find that!</p>
          </section>
          <section id="personality">
          <h3 class="purple">Personality</h3>
          <p>what is your oc like? how do they act in various situations?</p>
          </section>
          <section id="relationships">
          <h3 class="red">Relationships</h3>
          <!--i did categories for family, friends, and enemies, but you can come up with whatever categories make sense for your oc-->
          <h4>FAMILY</h4>
          <!--i used the detailed list element <dl> so i can write descriptions for each relationship-->
          <dl>
              <dt><!--<img src="images/no-icon.png" class="icon">-->A family member</dt>
              <dd>does your oc have parents or siblings? list them here!</dd>
          </dl>
          <h4>FRIENDS</h4>
            <dl>
              <dt><!--<img src="images/no-icon.png" class="icon">-->A friend</dt>
              <dd>tell us about your oc's friends! if they have any...? surely they have at least one!</dd>
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