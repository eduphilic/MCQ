import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import React, { ChangeEvent, Component } from "react";
// tslint:disable-next-line:import-name
import ResizeObserver from "resize-observer-polyfill";
import styled, { css } from "styled";

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
  hasFocus: boolean;
  mouseDown: boolean;
  mounted: boolean;
}

export class QuantitySlider extends Component<
  QuantitySliderProps,
  QuantitySliderState
> {
  private bar: HTMLInputElement | null = null;
  private thumbSymbols: HTMLSpanElement | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(props: QuantitySliderProps) {
    super(props);

    const { min, max, initialValue } = props;
    const value =
      initialValue === undefined ? Math.floor((max - min) / 2) : initialValue;

    this.state = {
      hasFocus: false,
      mouseDown: false,
      value,
      mounted: false,
    };
  }

  handleFocus = () => {
    this.setState({ hasFocus: true });
  };

  handleBlur = () => {
    this.setState({ hasFocus: false });
  };

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

    this.resizeObserver = new ResizeObserver(this.updateSymbolsPositioning);
    this.resizeObserver.observe(this.bar!);
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  render() {
    const { min, max, step, itemDescription } = this.props;
    const { value, hasFocus, mouseDown, mounted } = this.state;

    const isIe = window.navigator.userAgent.indexOf("Trident/") > 0;
    const ieHide = isIe && mouseDown;

    const thumbClasses = ([
      "material-icons",
      mounted ? "mounted" : false,
      ieHide ? "ie-hide" : false,
    ].filter(c => Boolean(c)) as string[]).join(" ");

    return (
      <Wrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item>
            <Typography>{max}</Typography>
          </Grid>

          <Grid item xs style={{ position: "relative" }}>
            <Bar
              className={hasFocus ? "active" : undefined}
              min={min}
              max={max}
              step={step}
              value={value}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              innerRef={c => (this.bar = c)}
              onChange={this.handleValueChange}
              onInput={this.handleValueChange}
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
            />
            <ThumbSymbols
              innerRef={c => (this.thumbSymbols = c)}
              className={thumbClasses}
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
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.grey["800"]};
  box-shadow: ${({ theme }) => theme.shadows[6]};
  cursor: pointer;
`;

const thumbStyleActive = css`
  background-color: ${({ theme }) => theme.palette.primary.light} !important;
`;

const browserThumbStyles = css`
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${thumbStyle};

    position: relative;
    top: 50%;
    transform: translateY(-50%);
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
`;

const trackStyle = css`
  width: 100%;
  height: 6px;
  border-radius: 8px;
  background: rgba(88, 163, 85, 0.5);
  cursor: pointer;
`;

const browserTrackStyles = css`
  &::-webkit-slider-runnable-track {
    ${trackStyle};
  }

  &::-moz-range-track {
    ${trackStyle};
  }

  &::-ms-track {
    width: 100%;
    height: 6px;
    color: transparent;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    border-radius: 8px;
    background: rgba(88, 163, 85, 0.5);
  }
`;

const Bar = styled.input.attrs({
  type: "range",
})`
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  background: transparent;

  ${browserThumbStyles};
  ${browserTrackStyles};

  &:focus {
    outline: none;
  }
`;

const ThumbSymbols = styled.span`
  position: absolute;
  box-sizing: border-box;
  top: 24px;
  color: #fff;
  font-size: 22px !important;
  letter-spacing: -8px !important;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;

  /* Internet Explorer specific adjustment */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    top: 26px;
    transform: translateX(-2px);
  }

  &.mounted {
    opacity: 1;
  }

  &.ie-hide {
    opacity: 0 !important;
  }
`;
