var tnl_info_str = $("#tnl_info").html() || '{}';
var tnl_info = JSON.parse(tnl_info_str);
class CommentItem extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            form_display: false,
            form_display_id: ''
        }
        this.openForm = this.openForm.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.onClapComment = this.onClapComment.bind(this)
    }
    openForm()
    {
        switch (this.props.salon_role) {
            case '':
            case 'tnl_member':
                alert('目前只有沙龍會員可以發表留言或拍手，我們預計未來會開放沙龍讓更多人參與，記得有空回來看看喔！');
                break;
            default:
                this.props.updateCommentReplyStatus(this.props.data.id)
                this.setState({ form_display: true })
                break;
        }
    }
    closeForm()
    {
        this.props.updateCommentReplyStatus('')
        this.setState({ form_display: false })
    }
    onClapComment(e)
    {
        switch (this.props.salon_role) {
            case '':
            case 'tnl_member':
            case 'viewer':
                alert('目前只有沙龍會員可以發表留言或拍手，我們預計未來會開放沙龍讓更多人參與，記得有空回來看看喔！');
                break;
            default:
                let formData = new FormData();
                formData.append('post_id', tnl_info.post_id)
                formData.append('comment_id', this.props.data.id)
                formData.append('member_id', tnl_info.member_id)

                var self = this
                axios({
                    method: 'post',
                    url: '/salon/comment/clap',
                    data: formData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }},
                    headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
                })
                .then(function (response) {
                    if (response.data.error == 0) {
                        self.props.updateComments(response.data.comments, response.data.comments_total)
                    } else {
                        alert(response.data.message)
                    }

                })
                .catch(function (error) {
                    //console.log(error)
                });
                break;
        }
    }
    render()
    {
        const level  = this.props.level;
        return (
            <React.Fragment>
                <div className={ this.props.is_top ? 'sc-comment' : 'sc-comment_2' }>
                    <div className="sc-avatar"><a href={ '/salon/member/' + this.props.data.member_id }><img src={ this.props.data.member_avatar } width="50" height="50"/></a></div>
                    <div className="sc-nickname"><a href={ '/salon/member/' + this.props.data.member_id }>{ this.props.data.member_nickname }<span>{ this.props.data.member_company } - { this.props.data.member_job_title }</span></a></div>
                    <div className="sc-dialog">
                        <div className="sc-content" dangerouslySetInnerHTML ={{__html: this.props.data.comment }}></div>
                        <div className="sc-feedback">
                            <a  onClick={ (e) => this.onClapComment(e) } className="icon"><i className="far fa-sign-language"></i> <span>{ this.props.data.clap_count }</span> </a>
                            { this.props.level >= 0 &&
                                <a onClick={ this.openForm } className="icon" title="回覆" data-id={ this.props.data.id } data-level={ this.props.level } ><i className="fal fa-comment-alt"></i><span>回覆</span></a>
                            }
                        </div>
                        { this.props.level >= 0  && this.state.form_display && this.props.comment_reply_id == this.props.data.id &&
                            <CommentForm level={ level + 1} parent_id={ this.props.data.id } salon_role={ this.props.salon_role } register_url={ this.props.register_url } is_reply={ true } closeForm={ this.closeForm } updateComments={ this.props.updateComments } reply_name={ this.props.data.user_nickname }/>
                        }
                        { this.props.data.children.length >= 0 && 
                            this.props.data.children.map((data) => (
                            <CommentItem data={ data } is_top={ false } salon_role={ this.props.salon_role } level={ level + 1 } register_url={ this.props.register_url } updateCommentReplyStatus={ this.props.updateCommentReplyStatus } comment_reply_id={this.props.comment_reply_id } updateComments={ this.props.updateComments }/>
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
class CommentForm extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            member_id: tnl_info.member_id,
            parent_id:this.props.parent_id,
            comment: ''
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.is_comment_sending = false
    }
    handleFieldChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault()
        let formData = new FormData();
        formData.append('post_id', tnl_info.post_id)
        formData.append('member_id', tnl_info.member_id)
        formData.append('parent_id', this.props.parent_id)
        formData.append('content', this.state.comment)
        var self = this
        if (!self.is_comment_sending) {
            self.is_comment_sending = true
            axios({
                method: 'post',
                url: '/salon/comment/store',
                data: formData,
                config: { headers: {'Content-Type': 'multipart/form-data'}},
                headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
            })
            .then(function (response) {
                if (response.data.error == 0) {
                    if (self.props.is_reply) {
                        self.props.closeForm()
                    }
                    self.setState({comment: ''})
                    self.props.updateComments(response.data.comments, response.data.comments_total)
                } else {
                    alert(response.data.message)
                }

                self.is_comment_sending = false
            })
            .catch(function (error) {
                //console.log(error)
            });
        }
    }
    onPopupCopy(e)
    {
        e.preventDefault()
        $(".popup_copy_modal").fadeIn()
    }
    generalReplyComponent() // 一般成員回應元件
    {
        return (
            <React.Fragment>
                {
                    (() => {
                        if (this.props.reply) {
                            return <React.Fragment>
                                        <textarea
                                            onChange={ this.handleFieldChange }
                                            name="comment"
                                            value={ this.state.comment }
                                            type="text"
                                            placeholder="我想說的是 ..."
                                            rows="5"
                                            cols="100"
                                        >
                                        </textarea>
                                        <div className="sc-send" onClick={ this.onSubmit }>
                                            <div className="btn btn-default" onClick={ this.onSubmit }>留言</div>
                                        </div>
                                    </React.Fragment>
                        } else {
                            return <ul className="sc_list">
                                        <div className="sc-comment">
                                            <div className="sc-dialog first">
                                                <React.Fragment>
                                                    <textarea
                                                        onChange={ this.handleFieldChange }
                                                        name="comment"
                                                        value={ this.state.comment }
                                                        type="text"
                                                        placeholder="我想說的是 ..."
                                                        rows="5"
                                                        cols="100"
                                                        onpropertychange= "this.style.posHeight=this.scrollHeight"
                                                    >
                                                    </textarea>
                                                    <div className="sc-send">
                                                        <div className="popup_copy"  onClick={ this.onPopupCopy }>TNL 網路沙龍守則</div>
                                                        <div className="btn btn-default" onClick={ this.onSubmit }>留言</div>
                                                    </div>
                                                </React.Fragment>
                                            </div>
                                        </div>
                                    </ul>
                        }
                    })()
                }
            </React.Fragment>
        );
    }
    viewerReplyComponent() // viewer回應元件
    {
        return (
            <React.Fragment>
                {
                    (() => {
                        if (this.props.reply) {
                            return <div className="Fill_in_the_salon_information">
                                        <p><a href={ this.props.register_url }>填寫沙龍資料</a>，與沙龍會員一起暢所欲言。</p>
                                    </div>
                        } else {
                            return <ul className="sc_list">
                                        <div className="sc-comment">
                                            <div className="sc-dialog first">
                                                <div className="Fill_in_the_salon_information">
                                                    <p><a href={ this.props.register_url }>填寫沙龍資料</a>，與沙龍會員一起暢所欲言。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                        }
                    })()
                }
            </React.Fragment>
        );
    }
    noLoginReplyComponent() // 未登入會員回應元件
    {
        const textStyle = {
            'text-align': 'left',
        };
        return (
            <ul className="sc_list">
                <div className="sc-comment">
                    <div className="sc-dialog first">
                        <div className="Fill_in_the_salon_information">
                            <p style={ textStyle }>
                                2021 年，關鍵決定提供一個理性討論的園地——<a href="/salon">沙龍</a>。
                                沙龍中網羅所有關於文章內容的討論，而這些討論，都是由我們第一批加入沙龍的 pilot 從幾個月前開始留下的足跡。
                                <br/><br/>
                                今年七月開始，沙龍準備讓更多的聲音加入，如果你也躍躍欲試，歡迎<a href="https://docs.google.com/forms/d/e/1FAIpQLSeCzVRTj1cVaxLRbDNXp2knhTIgnsxw0zEXDRcnWB3mR_KvHg/viewform" target="_blank">留下聯繫方式</a>，有新的消息，我們將馬上通知你！
                                （若有朋友已經是沙龍會員了，也可以請他邀請你加入唷！）
                            </p>
                        </div>
                    </div>
                </div>
            </ul>
        );
    }
    render()
    {
        return (
            <React.Fragment>
                {(() => {
                    switch (this.props.salon_role) {
                        case 'pilot':
                        case 'player':
                            return this.generalReplyComponent()
                            break;
                        case 'viewer':
                            return this.viewerReplyComponent();
                            break;
                        default:
                            return this.noLoginReplyComponent()
                            break;
                    }
                })()}
            </React.Fragment>
        );
    }
}
class Comment extends React.Component {
    constructor(props)
    {
        super(props);
        this.updateComments = this.updateComments.bind(this);
        this.updateCommentReplyStatus = this.updateCommentReplyStatus.bind(this);
        $(".popup_copy_modal .close").click(function () {
            $(".popup_copy_modal").fadeOut();
        });
    }
    state = {
        comment_reply_id:'',
        comments_total: tnl_info.comment_total,
        comments: [],
        salon_role: '',
        register_url: ''
    }
    componentDidMount()
    {
        moment.locale('zh-tw');
        const url = '/salon/comment/list?post_id=' + tnl_info.post_id;
        axios.get(url).then(response => response.data)
            .then((data) => {
                if (data.error) {
                    alert(data.message);
                } else {
                    this.setState(
                        {
                            comments: data.comments,
                            comments_total: data.comments_total,
                            salon_role: data.role,
                            register_url: data.register_url
                        }
                    )
                }
            });
    }
    updateComments(comments, comments_total)
    {
        this.setState({
            comments: comments,
            comments_total: comments_total
        })
    }
    updateCommentReplyStatus(id)
    {
        this.setState({ comment_reply_id : id })
    }
    onSalonMainPage(e)
    {
        window.location.href="/salon"
    }
    render()
    {
        const allowSalonRole = [
            'player',
            'pilot'
        ];
        return (
            <div id="salon_comment">
                <div className="fix_comment">
                    <a href="#salon_comment" className="gtm-track" data-gtm-category="salon_fixed_anchor" data-gtm-label="comment-fix">
                        <i className="far fa-comment-alt"></i> 留言 <span>{ this.state.comments_total }</span>
                    </a>
                </div>
                <div className="sc_content gtm-track" data-gtm-category="salon_comment" data-gtm-label="comment-box">
                    <div className="sc_header">
                        <h4 className="sc_title"><i className="far fa-comment-alt"></i> 留言 <span>{ this.state.comments_total }</span></h4>
                        {
                            allowSalonRole.includes(this.props.salon_role) &&
                            <p className="abstract">你認同本文的觀點嗎？我們想聽聽你的看法。</p>
                        }
                    </div>

                    <div className="sc_body">
                        <CommentForm parent_id="" is_reply={ false } salon_role={ this.state.salon_role } register_url={ this.state.register_url } updateComments={ this.updateComments } />
                        <ul className="sc_list">
                            {this.state.comments.map((data) => (
                                <CommentItem data={ data } is_top={ true } salon_role={ this.state.salon_role } register_url={ this.state.register_url } level={ 0 } updateCommentReplyStatus={ this.updateCommentReplyStatus } comment_reply_id={ this.state.comment_reply_id } updateComments={ this.updateComments }/>
                            ))}
                        </ul>
                    </div>
                    <div className="sc_footer">
                        <div className="btn btn-primary gtm-track" onClick={ this.onSalonMainPage } data-gtm-category="salon_to_TNLsalon" data-gtm-label="salon-index">前往 TNL 網路沙龍看更多議題</div>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Comment/>,
    document.getElementById('salon_comment_widget')
);
