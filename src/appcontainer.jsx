import Bracket from './components/bracket';
import TempCalculator from './components/calculator';
import Clock from './components/clock';
import Emoji from './components/emoji';
import Form from './components/form';
import Text from './components/text';

export default function AppContainer() {
  return (
    <>
      <Clock />
      <br />
      <Form />
      <br />
      <TempCalculator />

      <br />
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <>
                <Text
                  addEmoji={addEmoji}
                  addBracket={addBracket}
                  innerText="I am React the best UI library for JavaScript"
                />
                <Text addEmoji={addEmoji} addBracket={addBracket} />
                <Text addEmoji={addEmoji} />
              </>
            )}
          </Bracket>
        )}
      </Emoji>
      <Text />
    </>
  );
}
