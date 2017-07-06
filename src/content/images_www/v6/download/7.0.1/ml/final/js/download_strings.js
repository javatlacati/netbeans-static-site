/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright 1997-2010 Oracle and/or its affiliates. All rights reserved.
 *
 * Oracle and Java are registered trademarks of Oracle and/or its affiliates.
 * Other names may be trademarks of their respective owners.
 *
 * The contents of this file are subject to the terms of either the GNU General
 * Public License Version 2 only ("GPL") or the Common Development and Distribution
 * License("CDDL") (collectively, the "License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License at
 * https://netbeans.org/cddl-gplv2.html or nbbuild/licenses/CDDL-GPL-2-CP. See the
 * License for the specific language governing permissions and limitations under the
 * License.  When distributing the software, include this License Header Notice in
 * each file and include the License file at nbbuild/licenses/CDDL-GPL-2-CP.  Oracle
 * designates this particular file as subject to the "Classpath" exception as
 * provided by Oracle in the GPL Version 2 section of the License file that
 * accompanied this code. If applicable, add the following below the License Header,
 * with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions Copyrighted [year] [name of copyright owner]"
 * 
 * Contributor(s):
 * 
 * The Original Software is NetBeans. The Initial Developer of the Original Software
 * is Sun Microsystems, Inc. Portions Copyright 1997-2007 Sun Microsystems, Inc. All
 * Rights Reserved.
 * 
 * If you wish your version of this file to be governed by only the CDDL or only the
 * GPL Version 2, indicate your decision by adding "[Contributor] elects to include
 * this software in this distribution under the [CDDL or GPL Version 2] license." If
 * you do not indicate a single choice of license, a recipient has the option to
 * distribute your version of this file under either the CDDL, the GPL Version 2 or
 * to extend the choice of license to its licensees as provided above. However, if
 * you add GPL Version 2 code and therefore, elected the GPL Version 2 license, then
 * the option applies only if the new code is made subject to such option by the
 * copyright holder.
 */

var BUNDLED_SERVERS_GROUP_NAME = "Bundled&nbsp;servers";
                                                   
var NETBEANS_DOWNLOAD_BUNDLES_MSG = "NetBeans IDE Download Bundles";
var NETBEANS_DOWNLOAD_BUNDLES_COMMUNITY_MSG = "NetBeans IDE Download Bundles in community contributed languages";
var NETBEANS_PACKS_MSG 		  = "Supported&nbsp;technologies";

var JDK_DOWNLOAD_LINK    = "http://oracle.com/technetwork/java/javase/downloads/index.jsp";
var NBJDK_DOWNLOAD_LINK  = "http://java.sun.com/javase/downloads/widget/jdk_netbeans.jsp";

var JAVA_COM_LINK        = "http://java.com/";

var JDK_NOTE_ALL      = "Java 6 is required for installing and running the PHP and C/C++ NetBeans Bundles. You can download the <a href=\"{0}\">latest Java at java.com</a>.<br><br>JDK 6 is required for installing and running the Java SE, Java EE and All NetBeans Bundles. You can download <a href=\"{1}\">standalone JDK</a> or download the latest <a href=\"{2}\">JDK with NetBeans IDE Java SE bundle</a>.<br><br>";
//var JDK_NOTE_MACOSX   = "JDK 5.0 is required for installing and running the NetBeans IDE.";
var JDK_NOTE_MACOSX   = "";

var FREE_SIZE_MESSAGE  = "Free, {0}&nbsp;MB";
var NOT_AVAILABLE_SIZE = "--";

var NOTE_PREFIX    = "Note: ";
var NOTE_AND_SEP   = "{0} and {1}";
var NOTE_COMMA_SEP = "{0}, {1}";

var SINGLE_NOT_AVAILABLE_ZIP      = "{0} is not available in {1}";
var SINGLE_NOT_AVAILABLE_BUNDLE   = "{0} is not available for {1}";
var MULTIPLE_NOT_AVAILABLE_ZIP    = "{0} are not available in {1}";
var MULTIPLE_NOT_AVAILABLE_BUNDLE = "{0} are not available for {1}";

var ZIP_FILES_LIST_NAME             = "Zip Files";
var MODULE_CLUSTERS_FILES_LIST_NAME = "Module Clusters";

var NOTE_SOLARIS = "Note: Java ME is only available for Windows, Linux and Mac OS X.";
var NOTE_MACOSX  = "Note: Java ME is only available for Windows, Linux and Mac OS X.";
var NOTE_ZIP     = "Note: GlassFish and Apache Tomcat are only available in platform specific installers.";
var NOTE_ALL     = "Note: Greyed out technologies are not supported for this platform.";

var MORE_LANGUAGES    = "More Languages...";
var COMMUNITY_MESSAGE = "The NetBeans Community has fully contributed to the language(s) that can be downloaded from this page. To get more insight about localization volume downloaded check the <a href=\"http://wiki.netbeans.org/TFL10nCommunityStatus\">community status page</a>. To download latest community contribution, visit the <a href=\"http://wiki.netbeans.org/TFLocalizationDevelopmentUC\">localization plugin page</a>.";
var COMMUNITY_CONTRIBUTED_SEP    = " -- Community Contributed -- " ;
var SUN_SUPPORTED_SEP            = " -- Oracle Supported -- " ;

var NETBEANS_DOWNLOAD_PAGE_TITLE       = "NetBeans IDE Download";
var NETBEANS_DOWNLOAD_PAGE_DESCRIPTION = "NetBeans IDE Download";



var NETBEANS_DOWNLOAD_HEADER = "NetBeans IDE {0} Download";
var DEVELOPMENT_TITLE        = "Development";
var ARCHIVE_TITLE            = "Archive";
var EMAIL_LABEL              = "Email&nbsp;address&nbsp;(optional):&nbsp;";
var SUBSCRIBE_LABEL          = "Subscribe&nbsp;to&nbsp;newsletters:";
var MONTHLY_LABEL            = "Monthly&nbsp;&nbsp;&nbsp;&nbsp;";
var WEEKLY_LABEL             = "Weekly";
var CONTACT_LABEL            = "NetBeans&nbsp;can&nbsp;contact&nbsp;me&nbsp;at&nbsp;this&nbsp;address";
var LANGUAGE_LABEL           = "IDE Language:";
var PLATFORM_LABEL           = "Platform:";
var PLUGIN_MANAGER_LABEL     = "You can add or remove packs later using the IDE's Plugin Manager (Tools | Plugins).<br><br>";
var JAVATOOLSBUNDLE_LABEL    = "You can also download the NetBeans IDE as part of the <a href=\"http://java.sun.com/javaee/downloads/index.jsp\">Java EE 5 Tools Bundle</a> or <a href=\"http://download.netbeans.org/netbeans/6.1/mysql_bundle/\">MySQL GlassFish Bundle</a>.";
var SOURCE_BINARY_LABEL      = "NetBeans source code and binary builds without bundled runtimes are also available in <a id=\"zip_link\" href=\"{0}\">zip file format</a>.";
var BUILD_WIKI_LABEL         = "See also <a href=\"http://wiki.netbeans.org/wiki/view/WorkingWithNetBeansSources\">instructions on how to build the IDE from sources</a> or <a href=\"{0}\">installation instructions</a>.";
var PLATFORM_DEV_LABEL       = "You can start developing applications based on the NetBeans Platform using the NetBeans IDE for Java SE. Learn more about the <a href=\"{0}\">NetBeans Platform</a>.";
var PLATFORM_INFO_LINK       = "http://platform.netbeans.org/platform-get.html";

var ARCHIVE_BUILDS_LINK      = "http://services.netbeans.org/downloads/dev.php";
var DEVELOPMENT_BUILDS_LINK  = "http://bits.netbeans.org/download/trunk/nightly/latest/";

// TRANSLATE NOTE: change download*.gif to download*_<locale>.gif
var DOWNLOAD_BUTTON_NORMAL    = "download.gif";
var DOWNLOAD_BUTTON_DISABLED  = "download_d.gif";
var DOWNLOAD_BUTTON_HIGHLIGHT = "download_h.gif";

// DO NOT TRANSLATE
var START_PAGE = "start.html";
var ZIP_PAGE   = "zip.html";

