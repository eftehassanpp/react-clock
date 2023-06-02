export default function Text({ addEmoji, addBracket, innerText }) {
  let text = innerText ? innerText : 'I am a JavaScript Programing Language';
  if (addEmoji) text = addEmoji(text, '💜');
  if (addBracket) text = addBracket(text);
  return <div>{text}</div>;
}
