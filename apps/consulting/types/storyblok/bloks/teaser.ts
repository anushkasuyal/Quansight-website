import {
  TBlok,
  TeaserColor,
  TImage,
  TLink,
} from '@quansight/shared/ui-components';
import { ComponentType } from '../../../components/BlokProvider/types';

export type TTeaserRawData = {
  component: ComponentType.Teaser;
  color: TeaserColor;
  image: TImage;
  title: string;
  text: string;
  buttonText?: string;
  link?: TLink;
} & TBlok;
