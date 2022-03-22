//include File Create the WEB-INF/include/......
//폴더안에 생성된 include용 파일들을 Script에서 재사용한다.(공통으로 사용될 목적으로 생성)
//ex) Create Header Link And SideMenu or Footer

//Header
<link rel="stylesheet" href="../../static/css/fonts.css">
<link rel="stylesheet" href="../../static/css/common.css">
<link rel="stylesheet" href="../../static/css/content.css">
<link rel="stylesheet" href="../../static/css/layout.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="shortcut icon" href="../../static/img/icon.ico" type="image/x-icon">

//SideMenu
<section class="d-flex flex-row">
    <div id="">

        <div id="tnb1">
            <!-- tnb1c -->
            <div id="tnb1c">
                <!-- d1 -->
                <div class="d1">

                </div>
                <!-- /d1 -->
            </div>
            <!-- /tnb1c -->

            <!-- snb menu -->
            <div id="snb">

                <!-- snb tit -->
                <div class="snb_tit bg-light" >
                    <h2>Manager Page
						<span>Server Status : </span><span id="serverStatus">CHECK.. </span> <img id="serverStatusImg" src="../../static/img/status_check.png" style="width: 15px; height:15px; margin-left: 5px; margin-bottom: 2px;"/>
                    </h2>
                </div>
                <!--// snb tit -->
                <!-- snb list -->
                <div id="snb_list">

                    <!-- lnb list -->
                    <div class="lnb">
                        <ul id="treemenu" class="nav nav-list">
                            <li class="list-group-item-action" id="sidemenu_dashboard"><a href="dashboard"
                                                                                          style="cursor: pointer;">대시보드</a>
                            </li>
                            <li class="list-group-item-action" id="sidemenu_template_add"><a href="template_add"
                                                                                             style="cursor: pointer;">고객 등록</a></li>
                                data-target="#managerTab" id="sidemenu_manager_tab"><a style="cursor: pointer;">관리자</a>
                                <ul class="panel-body nav nav-list collapse" id="managerTab">
                                    <li class="list-group-item-action" id="sidemenu_manage_clients"><a
                                            href="manage_clients" style="cursor: pointer;">고객 관리</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    <!--//lnb list -->
                </div>

                <!--// snb list -->
            </div>
            <!--// snb menu -->
        </div>
        <!-- /tnb1 -->
    </div>
    <!-- //servicemenu1 -->
</html>

//Include Setting
<%@ include file="/WEB-INF/include/headerLink.jsp" %>
<%@ include file="/WEB-INF/include/sideMenu.jsp" %>


