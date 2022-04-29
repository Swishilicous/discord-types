import { NamedComponent } from '.';

type HeaderBar = JSX.Element & {
  Caret: JSX.Element;
  Divider: NamedComponent<'Divider'>;
  Icon: NamedComponent<'Icon'>;
  Title: NamedComponent<'Title'>;

  displayName: 'HeaderBar';
};

export default HeaderBar; 
