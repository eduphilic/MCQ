import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import React, { ChangeEvent, Component } from "react";
import styled, { css } from "styled";

// tslint:disable-next-line:no-empty-interface
export interface QuantitySliderProps {
  min: number;
  max: number;
  step: number;
  initialValue?: number;
  itemDescription: string;
  onChange?: (value: number) => void;
}

interface QuantitySliderState {
  value: number;
  mouseDown: boolean;
  mounted: boolean;
}

export class QuantitySlider extends Component<
  QuantitySliderProps,
  QuantitySliderState
> {
  private bar: HTMLInputElement | null = null;
  private thumbSymbols: HTMLSpanElement | null = null;

  constructor(props: QuantitySliderProps) {
    super(props);

    const { min, max, initialValue } = props;
    const value =
      initialValue === undefined ? Math.floor((max - min) / 2) : initialValue;

    this.state = {
      mouseDown: false,
      value,
      mounted: false,
    };
  }

  handleMouseDown = () => {
    this.setState({ mouseDown: true });
  };

  handleMouseUp = () => {
    this.setState({ mouseDown: false });
  };

  updateSymbolsPositioning = () => {
    const max = this.props.max - this.props.min;
    const value = this.state.value - this.props.min;
    const width = this.bar!.clientWidth - 40;

    const percent = value / max;

    const left = percent * width + 7.5;

    this.thumbSymbols!.style.left = `${left}px`;
  };

  handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    const oldValue = this.state.value;
    // We listen to both onChange and onInput for compatibility reasons. Make
    // sure we're not processing the same event twice.
    if (newValue === oldValue) return;

    this.setState({ value: newValue }, () => {
      this.updateSymbolsPositioning();
    });
  };

  componentDidMount() {
    this.updateSymbolsPositioning();
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 100);
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  render() {
    const { min, max, step, itemDescription } = this.props;
    const { value, mouseDown, mounted } = this.state;

    return (
      <Wrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item>
            <Typography>{max}</Typography>
          </Grid>

          <Grid item xs style={{ position: "relative" }}>
            <Bar
              className={mouseDown ? "active" : undefined}
              min={min}
              max={max}
              step={step}
              value={value}
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
              innerRef={c => (this.bar = c)}
              onChange={this.handleValueChange}
              onInput={this.handleValueChange}
            />
            <ThumbSymbols
              innerRef={c => (this.thumbSymbols = c)}
              className={`material-icons${mounted ? " mounted" : ""}`}
            >
              keyboard_arrow_left keyboard_arrow_right
            </ThumbSymbols>
          </Grid>

          <Grid item>
            <Typography>
              {max} {itemDescription}
            </Typography>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 0 4px;
`;

// Reference implementation:
// https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
const thumbStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.grey["800"]};
  box-shadow: ${({ theme }) => theme.shadows[6]};
  cursor: pointer;
`;

const thumbStyleActive = css`
  background-color: ${({ theme }) => theme.palette.primary.light} !important;
  box-shadow: ${({ theme }) => theme.shadows[8]};
`;

const Bar = styled.input.attrs({
  type: "range",
})`
  width: 100%;
  height: 48px;
  margin: 0;
  -webkit-appearance: none;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${thumbStyle};
  }
  &.active::-webkit-slider-thumb {
    ${thumbStyleActive};
  }

  &::-moz-range-thumb {
    ${thumbStyle};
  }
  &.active::-moz-range-thumb {
    ${thumbStyleActive};
  }

  &::-ms-thumb {
    ${thumbStyle};
  }
  &.active::-ms-thumb {
    ${thumbStyleActive};
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    background: transparent;
    border-color: transparent;
    color: transparent;
    cursor: pointer;
  }
`;

const ThumbSymbols = styled.span`
  position: absolute;
  top: 17px;
  color: #fff;
  font-size: 22px !important;
  letter-spacing: -8px !important;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;

  &.mounted {
    opacity: 1;
  }
`;
