import AnimatedNumber from 'react-animated-number';

const Blurb = () => (
  <div className="blurb">
    <p>2 years ago HackIllinois reinvented the college Hackathon. 
      We brought the best open source engineers in the world to work with 
      college students on open source. Here is how we are doing so far:
    </p>
    <table>
      <tr>
        <td>
          <AnimatedNumber
            style={{
                transition: '1s ease-out',
                transitionProperty:
                    'background-color, color',
                    fontSize: 48,
                    color: "#52bdcd",
                    fontWeight: '600'
            }}
            stepPrecision={0}
            value={200}
            duration={1000}
            formatValue={n => `${n}`}/>
          </td>
        <td>          
          <AnimatedNumber
            style={{
                transition: '1s ease-out',
                transitionProperty:
                    'background-color, color',
                fontSize: 48,
                color: "#52bdcd",
                fontWeight: '600'
            }}
            stepPrecision={0}
            value={1738}
            duration={1000}
            formatValue={n => `${n}`}/>
          </td>
        <td><AnimatedNumber
            style={{
                transition: '1s ease-out',
                transitionProperty:
                    'background-color, color',
                    fontSize: 48,
                    color: "#52bdcd",
                    fontWeight: '600'
            }}
            stepPrecision={0}
            value={1871}
            duration={1000}
            formatValue={n => `${n}`}/>
          </td>
      </tr>
      <tr>
        <td>pull requests</td>
        <td>students</td>
        <td>mentors</td>
      </tr>
    </table>
    <style jsx>{`
            .blurb {
                padding: 30px 30px 10px 30px;
                align-items: center;
                display: block;
            }
            p {
                text-align: center;
                font-family: "Montserrat";
            }
            table {
              margin: 0 auto;
              width: 70%;
              text-align: center;
              font-family: "Montserrat";
              padding: 10px;
            }
        `}</style>
  </div>
)

export default Blurb
