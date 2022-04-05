import React from 'react';

const Blogs = () => {
    return (
        <div className="container mt-5">
            <h3>What is Context API?</h3>
            <p>The Context API is a React framework that lets you share unique facts and helps you solve prop-drilling problems at various levels of your project. A React app may use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandma to kid to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management. Context API is a new feature in React 16.3 that allows you to easily and lightweight communicate state across your whole project or part of it.</p>
            <h3>What is Semantic Tag?</h3>
            <p>HTML tags are used to format material and tell the browser how to display it on the page. They provide no indication of the sort of material or the importance that content plays on the page. Semantic HTML5 overcomes this deficiency by adding particular tags that explicitly explain what role the content included in those elements plays. This explicit information aids robots/crawlers such as Google and Bing in determining which material is significant, which is a subset, which is for navigation, and so on. By including semantic HTML tags on your sites, you provide Google and Bing more information about the functions and relative significance of the various elements on your website. When a website is effectively designed aesthetically, it is simple for sighted people to recognize the various sections of a web page at a glance. The primary content, headers, menus, and (ideally) the main content are all visible right away. Now pretend you're completely blind. Google and Bing's bots (spiders) are severely visually challenged, if not blind. The visual signals are extremely difficult for them to perceive and interpret, so they require your assistance. header, footer, article, section are some of the semantic tags.</p>
        </div>
    );
};

export default Blogs;