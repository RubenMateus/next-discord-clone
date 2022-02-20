import { render } from '@testing-library/react';
import Icons from '../';

const cases = [...Object.keys(Icons)];

describe('Icons - ', () => {
  test.each(cases)('render snapshot %p', (iconKey) => {
    const Component = Icons[iconKey];

    const { container } = render(<Component />);

    expect(container).toMatchSnapshot();
  });
});
