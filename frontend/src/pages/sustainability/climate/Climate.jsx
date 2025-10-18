import * as Styles from './ClimateStyles';
import env1 from '../../../assets/sus6.png';
import env2 from '../../../assets/water2.jpg';
import env3 from '../../../assets/newSlide4.png';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect } from 'react';

const Climate = () => {
  return (
    <div>
      <Styles.ClimateHero>
        <img src={env1} alt='' />
        <Styles.BlendModeTitle>Climate</Styles.BlendModeTitle>
      </Styles.ClimateHero>
      <Styles.CultureInfo>
        {/* <h4>🌍 Sustainability at Joshcalebwill</h4> */}
        <p>
          Joshcalebwill provides energy responsibly, helping the world move
          towards a future in which the energy we use causes minimal impact on
          our planet. We recognise the importance of climate change, along with
          our role in helping people to achieve and maintain a good quality of
          life.
        </p>
        <p>
          Our world needs energy to support and improve life for a growing
          population. Joshcalebwill provides energy in a responsible way: we aim
          to limit any impact on the Climate and support the transition
          towards a lower-carbon future.
        </p>
      </Styles.CultureInfo>

      <Styles.StragegyContainer>
        <Styles.StragegyTitleContainer>
          <h4>strategy</h4>
          <h1>our strategy is clear</h1>
          <p>
            We all have a stake in a reliable, affordable energy system. Our
            belief that the future is lower carbon drives Joshcalebwill lower
            carbon ambitions and the actions we take to advance them.
          </p>
          <p>
            We’re leveraging our strengths to safely deliver lower carbon energy
            to a growing world:
          </p>
        </Styles.StragegyTitleContainer>
        <Styles.StragegyPixContainer>
          <Styles.StragegyPix>
            <img src={env2} alt='' />
            <p>working to lower the carbon intensity of our operations</p>
          </Styles.StragegyPix>
          <Styles.StragegyPix>
            <img src={env3} alt='' />
            <p>investing to grow capabilities in new energies</p>
          </Styles.StragegyPix>
        </Styles.StragegyPixContainer>
      </Styles.StragegyContainer>

      <Styles.ClimateOptionsContainer>
        <div>
          <p>
            Joshcalebwill has long recognised the climate challenge and the role
            of energy in enabling a decent quality of life. We believe that,
            while technological developments will emerge, effective policy and
            cultural change is essential to drive low-carbon business and
            consumer choices and opportunities.
          </p>
          <p>
            Joshcalebwill supports the establishment of government-led carbon
            “pricing” mechanisms that deliver a meaningful cost on CO2
            emissions, necessary to create transitions to lower-carbon power and
            fuel options.
          </p>
        </div>
        <h4>Discover what we are doing to achieve a cleaner energy future</h4>
        <Styles.ClimateOptions>
          <h2>Preventing spills</h2>
          <p>
            Oil or product spills damage the Climate and endanger our
            employees and neighbouring communities. To avoid spills and leaks of
            hazardous substances, we work hard to make sure our facilities are
            well designed, safely operated, and appropriately inspected and
            maintained. We invest in the equipment and human expertise we need
            to deal with any spills that happen.
          </p>
        </Styles.ClimateOptions>
        <Styles.ClimateOptions>
          <h2>Air quality</h2>
          <p>
            Producing and using fossil fuels can affect air quality. We have
            developed more efficient transport fuels for customers and focused
            on improving motorists’ fuel efficiency. We also work to reduce air
            pollution from our operations, including limiting emissions of
            nitrogen oxide, sulphur dioxide and volatile organic compounds.
          </p>
        </Styles.ClimateOptions>
        <Styles.ClimateOptions>
          <h2>Fresh water</h2>
          <p>
            We take steps to manage our use of water and apply new approaches
            and technologies to reduce our use of fresh water. We comply with
            water regulations wherever we operate and also set our own mandatory
            water standards, which match best practice for our industry.
          </p>
          <p>
            We tailor our use of fresh water to local conditions, as water
            constraints tend to affect people at the local or regional level. In
            some cases, we use alternatives to fresh water in our operations;
            these include recycled water, processed sewage water and desalinated
            water.
          </p>
        </Styles.ClimateOptions>
        <Styles.ClimateOptions>
          <h2>Biodiversity</h2>
          <p>
            Our projects can affect local biodiversity and dependent
            communities. We apply stringent standards to help reduce any impacts
            our operations may have, particularly in critical habitats, which
            are areas that are rich in biodiversity or under protection.
          </p>
          <p>
            We work with several conservation organisations, including
            Earthwatch, the International Union for Conservation of Nature, The
            Nature Conservancy, and Wetlands International. Our projects with
            biodiversity partners include working to restore natural habitats
            and ecosystems close to our operations.
          </p>
        </Styles.ClimateOptions>
      </Styles.ClimateOptionsContainer>
    </div>
  );
};

export default Climate;
