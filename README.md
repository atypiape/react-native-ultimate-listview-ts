# React Native Ultimate Listview

This Library includes **two** components: `UltimateListView` and `UltimateRefreshView`

- **UltimateListView**: A high performance **FlatList** providing customised pull-to-refresh | auto-pagination & infinite-scrolling | gridview layout | swipeable-row. The truly ultimate version that I have done the most tricky part for you, you can treat this module as an **enhanced FlatList** with all excellently extra features, comparing to the official version.
- **UltimateRefreshView**: A refreshable **ScrollView** providing customised pull-to-refresh feature, which has already been using in the UltimateListView, but it can be used independently.


This module supports both of **iOS** and **Android** platforms.

All codes are written in **ES6 syntax**, and meet most rules of **Eslint** syntax



**Quick installation**

```bash
yarn add react-native-ultimate-listview-ts
```

# Demo

|              | iOS                                      | Android                                  |
| ------------ | ---------------------------------------- | ---------------------------------------- |
| **FlatList** | ![](https://github.com/gameboyVito/react-native-ultimate-listview/blob/master/Demo/ios.gif) | ![](https://github.com/gameboyVito/react-native-ultimate-listview/blob/master/Demo/android.gif) |



# Usage

```jsx
import { UltimateListView, UltimateRefreshView } from 'react-native-ultimate-listview-ts'
    <UltimateRefreshView onRefresh={this.onRefresh}>
         <YourView/>
    </UltimateRefreshView>

    <UltimateListView
       ref={ref => this.listView = ref}
       key={this.state.layout}
       onFetch={this.onFetch}
       keyExtractor={(item, index) => `${index} - ${item}`} 
       refreshableMode="advanced" // basic or advanced
       item={this.renderItem} // this takes three params (item, index, separator)       
       displayDate
       arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }}/>
```

Or you can look through this link: [Usage](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/Usage)

# Documentation

- [Overview](https://github.com/gameboyVito/react-native-ultimate-listview/wiki)
- [FlatList Migration](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/FlatList-Migration)
- [Usage](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/Usage)
- [ListView API](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/ListView-API)
- [RefreshView API](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/RefreshView-API) - most props are supported in <UltimateRefreshView />
- [Pagination API](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/Pagination-API)
- [Methods API](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/Methods-API)
- [Swipable Tip](https://github.com/gameboyVito/react-native-ultimate-listview/wiki/Swipable-Row)



# Why FlatList

I have found some articles to explain why you need to use FlatList instead of the legacy ListView. There are some obvious reasons:

1. FlatList is just like the **UICollectionView** or **RecyclerView**, which can dramatically reduce memory usage. It also provides smoother animation when you have an extremely long list.
2. FlatList supports scrollToIndex function, which is pretty convenient when you want to scroll to an item with index, instead of depending the y-offset.
3. FlatList recommend developer to use PureComponent to reduce unnecessary re-rendering, this can really boost the performance and make your app run faster.

* [Chinese article](https://segmentfault.com/a/1190000008589705) 
* [Official article](https://facebook.github.io/react-native/blog/2017/03/13/better-list-views.html) 


# License

MIT
