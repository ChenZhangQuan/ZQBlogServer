关于xib，autolayout适配cell
==

>xib里autolayout在 在iOS7与iOS8里对cell进行动态排版的有挺多的细节需要注意

## 在iOS8以及之后，系统做了优化 ##
iOS8可以动态更改约束，可以改变约束的长度以及优先值；而iOS7里支持的不太好，很多更改的操作可能会导致直接crash

其次，iOS8里如果将cell的最下面一个空间跟cell的底部加一条约束，系统会自己帮你算出cell的高度，而不需要去实现tableView
heightForRow代理方法来返回cell高度；而iOS7里如果你不实现tableView heightForRow代理方法系统也会直接crash掉，而且系统也不会帮你计算的。解决办法：
>1.在iOS7里尽量稍作更改约束优先级的操作

>2.在返回cell高度的方法里分类讨论
在iOS7里cell的高度计算方式可以通过新建cell，来得到cell的最下面那个控件的frame
在iOS8里cell的高度通过计算像iOS7中一样，也可以通过压迫cell，让系统帮助计算。

### 补充 ###
iOS7里不能给tableView addsubview。


关于tableHeaderView高度不固定的情况应做如下操作：
>1.首先headview必须给一个frame

>2.然后将子空间在headview中布局

>3.layoutifneed

>4.让headview的height根据布局后的最后一个控件来设置

>5.tableview.headview= headview
