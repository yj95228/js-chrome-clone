const quotes = [
    {
        quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
        author: "마르쿠스 아우렐리우스 안토니우스",
    },
    {
        quote: "행복은 습관이다,그것을 몸에 지니라",
        author: "허버드",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈",
    },
    {
        quote: "행복해서 웃는게 아니라 웃어서 행복한 것이라",
        author: "노홍철",
    },
    {
        quote: "인생이란 학교에는 불행 이란 훌륭한 스승이 있다. 그 스승 때문에 우리는 더욱 단련되는 것이다.",
        author: "프리체",
    },
    {
        quote: "한 번 실패와 영원한 실패를 혼동하지 마라.",
        author: "F.스콧 핏제랄드",
    },
    {
        quote: "당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.",
        author: "낸시 설리번",
    },
    {
        quote: "문제점을 찾지 말고 해결책을 찾으라",
        author: "헨리 포드",
    },
    {
        quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "하버트 개서",
    },
    {
        quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
        author: "동아프리카 속담",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;