import React from 'react';

declare module '@bang88/react-native-ultimate-listview' {

export type UltimatePostFetch = (rows: any[], pageLimit: number) => void;
export type UltimateEndFetch = () => void;

export interface UltimateListViewProps {
  initialNumToRender: number,
  horizontal?: boolean,

  firstLoader?: boolean,
  scrollEnabled?: boolean,
  onFetch: (pageCode: number, postFetch: UltimatePostFetch, endFetch: () => UltimateEndFetch) => void,
  enableEmptySections?: boolean,

  // Custom ListView
  header?: () => JSX.Element | null,
  item?: (item: any, index: number, separators?: JSX.Element) => JSX.Element,
  paginationFetchingView?: () => JSX.Element | null,
  paginationAllLoadedView?: () => JSX.Element | null,
  paginationWaitingView?: () => JSX.Element | null,
  paginationLoadMoreView?: () => JSX.Element | null,
  emptyView?: () => JSX.Element | null,
  separator?: () => JSX.Element | null,

  // Refreshable
  refreshable?: boolean,
  refreshableMode?: string,

  // RefreshControl
  refreshableTitle?: string,
  refreshableColors?: string[],
  refreshableProgressBackgroundColor?: string,
  refreshableSize?: string,
  refreshableTintColor?: string,
  customRefreshControl?: () => JSX.Element | null,

  // Advanced RefreshView
  refreshableTitlePull?: string,
  refreshableTitleRefreshing?: string,
  refreshableTitleRelease?: string,
  customRefreshView?: Function,
  displayDate?: boolean,
  dateFormat?: string,
  dateTitle?: string,
  arrowImageSource?: any,
  arrowImageStyle?: object,
  refreshViewStyle?: object,
  dateStyle?: object,
  refreshViewHeight?: number,


  // Pagination
  pagination?: boolean,
  autoPagination?: boolean,
  allLoadedText?: string,

  // Spinner
  spinnerColor?: string,
  fetchingSpinnerSize?: any,
  waitingSpinnerSize?: any,
  waitingSpinnerText?: string,

  // Pagination Button
  paginationBtnText?: string,

  // GridView
  numColumns?: number,

  // Patch
  getItemLayout?: (data: any[], index: number) => { length: number; offset: number; index: number };
}

export class UltimateListView extends React.Component<UltimateListViewProps, any> {
  static defaultProps: {
    initialNumToRender: number,
    horizontal: false,

    firstLoader: boolean,
    scrollEnabled: boolean,
    onFetch: null,
    enableEmptySections: boolean,

    // Custom View
    header: null,
    item: null,
    paginationFetchingView: null,
    paginationAllLoadedView: null,
    paginationWaitingView: null,
    paginationLoadMoreView: null,
    emptyView: null,
    separator: null,

    // Refreshable
    refreshable: boolean,
    refreshableMode: string, // basic or advanced

    // RefreshControl
    refreshableTitle: null,
    refreshableColors: string[],
    refreshableProgressBackgroundColor: string,
    refreshableSize: undefined,
    refreshableTintColor: string,
    customRefreshControl: null,

    // Advanced RefreshView
    refreshableTitlePull: string,
    refreshableTitleRefreshing: string,
    refreshableTitleRelease: string,
    customRefreshView: null,
    displayDate: false,
    dateFormat: string,
    dateTitle: string,
    arrowImageSource: any,
    arrowImageStyle: undefined,
    refreshViewStyle: undefined,
    dateStyle: undefined,
    refreshViewHeight: number,

    // Pagination
    pagination: boolean,
    autoPagination: boolean,
    allLoadedText: string,

    // Spinner
    spinnerColor: undefined,
    fetchingSpinnerSize: string,
    waitingSpinnerSize: string,
    waitingSpinnerText: string,

    // Pagination Button
    paginationBtnText: string,

    // GridView
    numColumns: number,
  }

  constructor(props: UltimateListViewProps);

  render(): JSX.Element;

  /** Refresh the whole list. By default,
   * it will set the page to 1 and fetch data from server again
   */
  refresh(): void;

  /** Manaually scroll the listview to a specified position */
  scrollToIndex(option: { x: number, y: number, animated: boolean }): void;

  /** Manually scroll the listview to the end */
  scrollToEnd(option: { animated: boolean }): void;

  setPage(page: number): void;

  getPage(): number;

  /** Set the current DataSource */
  setRows(rows: any[]): void;

  /** Get the current DataSource */
  getRows(): any[];

  /** If you want to modify or update your DataSource, 
   * you can generate a new array and pass it into this method. 
   * Then the ListView will be rerender automatically.
   */
  updateDataSource(rows: any[] | object);

  postRefresh(rows: any[], pageLimit: number);

  postPaginate(rows: any[] = []);
}

}