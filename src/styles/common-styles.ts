export const animation_line = {
  position: 'relative',
  _after: {
    content: "''",
    position: 'absolute',
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0%',
    height: '1px',
    backgroundColor: 'black',
    transition: 'width 0.3s ease',
  },
  _hover: {
    _after: {
      width: '100%',
    },
  },
}
