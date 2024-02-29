import React from "react";
import Event from './Event';

const Grid = () => {
    return (
        <div className="Grid">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Event event="Summer of Music" color='orange' location='2324B Market St, San Francisco, CA 94114' date='06/17/2024' time = '2:00 pm - 5:00 pm' link='https://www.summerofmusicsf.com' image='src/assets/summer_of_music.png' /></td>
                        <td><Event event="Bay Area KidFest 2024" color='green' location='2450 Grant St, Concord, CA 94520' date='05/25/2024' time ='10:00 am - 5:00 pm' link='https://www.eventbrite.com/e/bay-area-kidfest-2024-tickets-764211355737' image='src/assets/kidfest.png' /></td>
                        <td><Event event="SF’s Museum of Craft and Design" color='pink' location='2569 Third Street, San Francisco, CA 94107' date='05/15/2024' time ='10:00 am - 5:30 pm' link='https://sfmcd.org/visit/#tickets' image='src/assets/craft_and_design.png' /></td>
                        <td><Event event="Speakeasy Comedy Show and Cocktail Night" color='yellow' location='Sign up to be emailed secret location!' date='05/18/2024' time = '7:00pm - 11:00 pm' link='https://www.eventbrite.com/e/hellasecret-speakeasy-comedy-cocktail-night-oakland-2024-tickets-122771929145?aff=FCEventPage&discount=funcheap' image='src/assets/speakeasy.png' /></td>
                        <td><Event event="‘Safety Third’ DJ Night at Black Hammer Brewing" color='blue' location='544 Bryant St., San Francisco, CA' date='05/17/2024' time='7:00pm - 11:00pm' link='https://www.instagram.com/p/CzxH7wTJQyK/' image='src/assets/safety_third.png' /></td>
                    </tr>
                    <tr>
                        <td><Event event="Free Reggae in the Park" color='yellow' location='Music Concourse Dr, San Francisco, CA' date='05/19/2024' time = '4:30pm - 7:30 pm' link='https://sf.funcheap.com/free-reggae-in-the-park-2024-crucial-sundays-golden-gate-park-12/' image='src/assets/reggae.png' /></td>
                        <td><Event event="Asian Art Museum: Free First Sundays" color='blue' location='200 Larkin Street San Francisco, CA' date='06/02/2024' time = '10:00 am - 5:00 pm' link='https://about.asianart.org/plan-your-visit/?utm_campaign=Plan%20Your%20Visit&utm_medium=funcheap&utm_source=funcheap' image='src/assets/asian_museum_of_art.png' /></td>
                        <td><Event event="Free National Parks Day " color='green' location='Muir Woods & Yosemite National Parks' date='06/19/2024' time = '7:00 am - 9:00 pm' link='https://www.nps.gov/planyourvisit/fee-free-parks.htm' image='src/assets/nationpark.webp' /></td>
                        <td><Event event="Art, Poetry & Concert Crawl" color='orange' location='Mission St. and 20th St., San Francisco, CA' date='06/01/2024' time = '6:00 pm - Midnight' link='https://sf.funcheap.com/mapp-sfs-free-art-poetry-concert-crawl-in-the-mission-8/' image='src/assets/art_poetry_crawl.png' /></td>
                        <td><Event event="San Francisco Botanical Garden’s Free Day" color='pink' location='1199 9th Avenue, San Francisco, CA 94122' date='06/09/2024' time = '7:30 am - 4:00 pm' link='https://gggp.org/visit/admissions-hours/' image='src/assets/botanical_garden.png' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Grid;
