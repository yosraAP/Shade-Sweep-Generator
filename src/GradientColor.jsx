import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Pallete from './components/Pallete';
import { addColor, changeColor, removeColor } from './store/slicer/colorSlicer';

const ReduxColor = () => {
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  const onAddColor = () => {
    if (colors.length >= 6) {
      alert('The number of colors selected exceeds the allowed limit of 6.');
      return;
    }
    dispatch(addColor());
  };

  const onRemoveColor = () => {
    if (colors.length < 3) {
      alert('The minimum number of colors is 2');
      return;
    }
    dispatch(removeColor());
  };

  const markdown = `background-image: linear-gradient(to right top, ${colors.join(
    ', '
  )});`;

  const onChangeColor = (e, index) => {
    const newColor = [...colors];
    newColor[index] = e.target.value;
    dispatch(changeColor(newColor));
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right top, ${colors.join(', ')} )`,
      }}
      className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <ReactMarkdown className={'my-8 px-4 py-4 text-xl font-semibold rounded-full bg-white/55'}>
        {markdown}
      </ReactMarkdown>

      <button className="bg-[linear-gradient(to_right_top,#000ccc,#a30417)] text-white w-[200px] m-2 py-3 px-4 rounded-full" onClick={onAddColor}>
        Add Color
      </button>
      <button className="bg-[linear-gradient(to_right_top,#a30417,#000ccc)] w-[200px] text-white px-4 py-3 rounded-full" onClick={onRemoveColor}>
        Remove Color
      </button>
      <div className="mt-8 flex justify-center items-center gap-2">
        {colors?.map((color, index) => {
          return (
            <Pallete
              key={index}
              name={index}
              value={color}
              onChange={(e) => onChangeColor(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReduxColor;
