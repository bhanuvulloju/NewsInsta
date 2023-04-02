import React, { Component } from "react";
import NewsItem from "./NewsItem";
import propTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country:'in',
    category: 'general',

  }
  static propTypes = {
    country: propTypes.string, 
    category: propTypes.string,
  }


    constructor(props) {
    super(props);
    console.log("I am constructor news insta news");
    this.state = {
      articles: [],
      loading: false,
      page:1 
    };
  }

  async componentDidMount(){
    console.log("mount")
    // let url = "https://api.dictionaryapi.dev/api/v2/entries/en/stacking"
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d38200f54c4416aa723406c8fd86735&page=1`
    let data =await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData[0].meanings[0].definitions[0]["definition"]);
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
  }
  handlePrevClick =async ()=>{
    console.log("this is prev budy")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d38200f54c4416aa723406c8fd86735&page=${this.state.page - 1}`;
    let data =await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles : parsedData.articles})

    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles
    })
  }
  handleNextClick =async ()=>{
    console.log("this is Next budy")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d38200f54c4416aa723406c8fd86735&page=${this.state.page + 1}`;
    let data =await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles : parsedData.articles})

    this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles
    })
  }

  render() {
    console.log("helo render")
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'72px'}} >NewsInsta - Top headlines </h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 42) : ""}
                  description={element.description ? element.description.slice(0, 82) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage :"https://ichef.bbci.co.uk/news/1024/branded_news/15A3A/production/_128943688_gettyimages-1125505349.jpg"}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                />
              </div>
            );
          })}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}  >&larr; Prev</button>
        <button   type="button" class="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        {/* disabled={!this.state.page?true:false} */}
        </div>

        </div>
      </div>
    );
  }
}

export default News;

// articles = [
//   {
//     source: { id: "bbc-sport", name: "BBC Sport" },
//     author: null,
//     title: "India v Australia - Cricket - BBC Sport",
//     description:
//       "Find out the in depth batting and bowling figures for India v Australia in the Test Match Series on BBC Sport.",
//     url: "http://www.bbc.co.uk/sport/cricket/scorecard/ECKO56738",
//     urlToImage:
//       "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
//     publishedAt: "2023-03-09T09:07:18.1657263Z",
//     content:
//       "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(51.0 overs)</th><th>132-for2wickets</th… [+1812 chars]",
//   },
//   {
//     source: { id: "google-news-in", name: "Google News (India)" },
//     author: "India Today",
//     title:
//       "How PM Modi uses cricket for diplomacy, connect with students - India Today",
//     description:
//       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//     url: "https://news.google.com/rss/articles/CBMikwFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL2luZGlhL3N0b3J5L3BtLW1vZGktdXNlcy1jcmlja2V0LXdvcmRzLXRvLWhpdC1iYWxsLW91dC1vZi1wYXJrLW5hcmVuZHJhLW1vZGktY3JpY2tldC1zdGFkaXVtLWRpcGxvbWFjeS0yMzQ0MjY3LTIwMjMtMDMtMDnSAZcBaHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi9hbXAvaW5kaWEvc3RvcnkvcG0tbW9kaS11c2VzLWNyaWNrZXQtd29yZHMtdG8taGl0LWJhbGwtb3V0LW9mLXBhcmstbmFyZW5kcmEtbW9kaS1jcmlja2V0LXN0YWRpdW0tZGlwbG9tYWN5LTIzNDQyNjctMjAyMy0wMy0wOQ?oc=5",
//     urlToImage:
//       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//     publishedAt: "2023-03-09T06:02:24+00:00",
//     content:
//       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
//   },
//   {
//     source: { id: "abc-news-au", name: "ABC News (AU)" },
//     author: "ABC News",
//     title: "Live scorecard: India vs Australia, fourth Test in Ahmedabad",
//     description:
//       "Australia is looking to draw the series with victory in cricket's largest stadium, the Narendra Modi Stadium in Ahmedabad. Follow all the live scores in our scorecard.",
//     url: "http://www.abc.net.au/news/2023-03-09/live-scorecard-india-vs-australia-fourth-test-ahmedabad/102068776",
//     urlToImage:
//       "https://live-production.wcms.abc-cdn.net.au/efe80d41a60494b6829cf55bc923150f?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=431&width=862&height=485",
//     publishedAt: "2023-03-09T03:33:13Z",
//     content:
//       "There is a watch and act warning in place for Tambaroora in New South Wales. For the latest information, search ABC Emergency",
//   },
//   {
//     source: { id: "news-com-au", name: "News.com.au" },
//     author: "Matthew Sullivan",
//     title: "Albo’s India meeting sparks cricket farce",
//     description:
//       "<p>Welcome to news.com.au&rsquo;s coverage of the fourth and final Test between Australia and India.</p>",
//     url: "https://www.news.com.au/sport/cricket/australia-vs-india-4th-test-day-1-live-albos-meeting-with-india-pm-sparks-chaos/news-story/ae849f2f99f234dc0a3b3e644e8e1a00",
//     urlToImage:
//       "https://content.api.news/v3/images/bin/389657a674de7756afc531d349167109",
//     publishedAt: "2023-03-09T03:05:00Z",
//     content:
//       "Welcome to news.com.au’s coverage of the fourth and final Test between Australia and India.\r\nIndia retained the Border Gavaskar Trophy after the first two Test but the Aussies restored some pride by … [+2050 chars]",
//   },
//   {
//     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
//     author: null,
//     title:
//       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//     description:
//       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//     urlToImage:
//       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//     publishedAt: "2020-04-27T11:41:47Z",
//     content:
//       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
//   },
//   {
//     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
//     author: null,
//     title:
//       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//     description:
//       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//     urlToImage:
//       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//     publishedAt: "2020-03-30T15:26:05Z",
//     content:
//       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
//   },
// ];
