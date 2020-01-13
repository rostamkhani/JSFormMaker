
class JForm {
    TempTableInfo = {
        Tbl_Name: 'Tbl_Student',
        Columns: [
            { Name: 'ID',     DType: 'int', Title: 'ID', Key: true, AllowNull: false },
            { Name: 'FName',  DType: 'nvarchar(50)', Title: 'Frist Name:', Key: false, AllowNull: false },
            { Name: 'LName',  DType: 'nvarchar(50)', Title: 'Last Name:', Key: false, AllowNull: false },
            { Name: 'Sex', DType: 'bit', Title: 'Sex:', Key: false, AllowNull: true },
            { Name: 'Mobile', DType: 'char(11)', Title: 'Mobile:', Key: false, AllowNull: true },
            { Name: 'Country', DType: 'int', Title: 'Country:', Key: false, AllowNull: true },
            { Name: 'Address', DType: 'varchar(500)', Title: 'Address:', Key: false, AllowNull: true },
            { Name: 'Marrid', DType: 'bit', Title: 'Married:', Key: false, AllowNull: true },
            { Name: 'Email', DType: 'varchar(255)', Title: 'Email:', Key: false, AllowNull: true }
        ],
        Controls:[
            { Type: 'Auto' },
            { Type: 'Auto' },
            { Type: 'Auto' },
            { Type: 'RadioButton',
              Items:[{Name: 'RadioSex',Title:'Man', Value:1},
                     {Name: 'RadioSex',Title:'Woman',Value:0} ] 
            },
            { Type: 'Auto' },
            { Type: 'DropDown',
            Items:[
                {Title:'Afghanistan',Value:1},{Title:'Aland Islands',Value:2},{Title:'Albania',Value:3},{Title:'Algeria',Value:4},{Title:'American Samoa',Value:5},{Title:'Andorra',Value:6},{Title:'Angola',Value:7},{Title:'Anguilla',Value:8},{Title:'Antigua',Value:9},{Title:'Argentina',Value:10},{Title:'Armenia',Value:11},{Title:'Aruba',Value:12},{Title:'Australia',Value:13},{Title:'Austria',Value:14},{Title:'Azerbaijan',Value:15},{Title:'Bahamas',Value:16},{Title:'Bahrain',Value:17},{Title:'Bangladesh',Value:18},{Title:'Barbados',Value:19},{Title:'Belarus',Value:20},{Title:'Belgium',Value:21},{Title:'Belize',Value:22},{Title:'Benin',Value:23},{Title:'Bermuda',Value:24},{Title:'Bhutan',Value:25},{Title:'Bolivia',Value:26},{Title:'Bosnia',Value:27},{Title:'Botswana',Value:28},{Title:'Bouvet Island',Value:29},{Title:'Brazil',Value:30},{Title:'British Virgin Islands',Value:31},{Title:'Brunei',Value:32},{Title:'Bulgaria',Value:33},{Title:'Burkina Faso',Value:34},{Title:'Burma',Value:35},{Title:'Burundi',Value:36},{Title:'Caicos Islands',Value:37},{Title:'Cambodia',Value:38},{Title:'Cameroon',Value:39},{Title:'Canada',Value:40},{Title:'Cape Verde',Value:41},{Title:'Cayman Islands',Value:42},{Title:'Central African Republic',Value:43},{Title:'Chad',Value:44},{Title:'Chile',Value:45},{Title:'China',Value:46},{Title:'Christmas Island',Value:47},{Title:'Cocos Islands',Value:48},{Title:'Colombia',Value:49},{Title:'Comoros',Value:50},{Title:'Congo Brazzavill',Value:51},{Title:'Congo',Value:52},{Title:'Cook Islands',Value:53},{Title:'Costa Rica',Value:54},{Title:'Cote Divoire',Value:55},{Title:'Croatia',Value:56},{Title:'Cuba',Value:57},{Title:'Cyprus',Value:58},{Title:'Czech Republic',Value:59},{Title:'Denmark',Value:60},{Title:'Djibouti',Value:61},{Title:'Dominica',Value:62},{Title:'Dominican Republic',Value:63},{Title:'Ecuador',Value:64},{Title:'Egypt',Value:65},{Title:'El Salvador',Value:66},{Title:'England',Value:67},{Title:'Equatorial Guinea',Value:68},{Title:'Eritrea',Value:69},{Title:'Estonia',Value:70},{Title:'Ethiopia',Value:71},{Title:'European Union',Value:72},{Title:'Falkland Islands',Value:73},{Title:'Faroe Islands',Value:74},{Title:'Fiji',Value:75},{Title:'Finland',Value:76},{Title:'France',Value:77},{Title:'French Guiana',Value:78},{Title:'French Polynesia',Value:79},{Title:'French Territories',Value:80},{Title:'Gabon',Value:81},{Title:'Gambia',Value:82},{Title:'Georgia',Value:83},{Title:'Germany',Value:84},{Title:'Ghana',Value:85},{Title:'Gibraltar',Value:86},{Title:'Greece',Value:87},{Title:'Greenland',Value:88},{Title:'Grenada',Value:89},{Title:'Guadeloupe',Value:90},{Title:'Guam',Value:91},{Title:'Guatemala',Value:92},{Title:'Guinea-Bissau',Value:93},{Title:'Guinea',Value:94},{Title:'Guyana',Value:95},{Title:'Haiti',Value:96},{Title:'Heard Island',Value:97},{Title:'Honduras',Value:98},{Title:'Hong Kong',Value:99},{Title:'Hungary',Value:100},{Title:'Iceland',Value:101},{Title:'India',Value:102},{Title:'Indian Ocean Territory',Value:103},{Title:'Indonesia',Value:104},{Title:'Iran',Value:105},{Title:'Iraq',Value:106},{Title:'Ireland',Value:107},{Title:'Israel',Value:108},{Title:'Italy',Value:109},{Title:'Jamaica',Value:110},{Title:'Japan',Value:111},{Title:'Jordan',Value:112},{Title:'Kazakhstan',Value:113},{Title:'Kenya',Value:114},{Title:'Kiribati',Value:115},{Title:'Kuwait',Value:116},{Title:'Kyrgyzstan',Value:117},{Title:'Laos',Value:118},{Title:'Latvia',Value:119},{Title:'Lebanon',Value:120},{Title:'Lesotho',Value:121},{Title:'Liberia',Value:122},{Title:'Libya',Value:123},{Title:'Liechtenstein',Value:124},{Title:'Lithuania',Value:125},{Title:'Luxembourg',Value:126},{Title:'Macau',Value:127},{Title:'Macedonia',Value:128},{Title:'Madagascar',Value:129},{Title:'Malawi',Value:130},{Title:'Malaysia',Value:131},{Title:'Maldives',Value:132},{Title:'Mali',Value:133},{Title:'Malta',Value:134},{Title:'Marshall Islands',Value:135},{Title:'Martinique',Value:136},{Title:'Mauritania',Value:137},{Title:'Mauritius',Value:138},{Title:'Mayotte',Value:139},{Title:'Mexico',Value:140},{Title:'Micronesia',Value:141},{Title:'Moldova',Value:142},{Title:'Monaco',Value:143},{Title:'Mongolia',Value:144},{Title:'Montenegro',Value:145},{Title:'Montserrat',Value:146},{Title:'Morocco',Value:147},{Title:'Mozambique',Value:148},{Title:'Namibia',Value:149},{Title:'Nauru',Value:150},{Title:'Nepal',Value:151},{Title:'Netherlands Antilles',Value:152},{Title:'Netherlands',Value:153},{Title:'New Caledonia',Value:154},{Title:'New Guinea',Value:155},{Title:'New Zealand',Value:156},{Title:'Nicaragua',Value:157},{Title:'Niger',Value:158},{Title:'Nigeria',Value:159},{Title:'Niue',Value:160},{Title:'Norfolk Island',Value:161},{Title:'North Korea',Value:162},{Title:'Northern Mariana Islands',Value:163},{Title:'Norway',Value:164},{Title:'Oman',Value:165},{Title:'Pakistan',Value:166},{Title:'Palau',Value:167},{Title:'Palestine',Value:168},{Title:'Panama',Value:169},{Title:'Paraguay',Value:170},{Title:'Peru',Value:171},{Title:'Philippines',Value:172},{Title:'Pitcairn Islands',Value:173},{Title:'Poland',Value:174},{Title:'Puerto Rico',Value:175},{Title:'Qatar',Value:176},{Title:'Reunion',Value:177},{Title:'Romania',Value:178},{Title:'Russia',Value:179},{Title:'Rwanda',Value:180},{Title:'Saint Helena',Value:181},{Title:'Saint Kitts and Nevis',Value:182},{Title:'Saint Lucia',Value:183},{Title:'Saint Pierre',Value:184},{Title:'Saint Vincent',Value:185},{Title:'Samoa',Value:186},{Title:'San Marino',Value:187},{Title:'Sandwich Islands',Value:188},{Title:'Sao Tome',Value:189},{Title:'Saudi Arabia',Value:190},{Title:'Senegal',Value:191},{Title:'Serbia',Value:192},{Title:'Serbia',Value:193},{Title:'Seychelles',Value:194},{Title:'Sierra Leone',Value:195},{Title:'Singapore',Value:196},{Title:'Slovakia',Value:197},{Title:'Slovenia',Value:198},{Title:'Solomon Islands',Value:199},{Title:'Somalia',Value:200},{Title:'South Africa',Value:201},{Title:'South Korea',Value:202},{Title:'Spain',Value:203},{Title:'Sri Lanka',Value:204},{Title:'Sudan',Value:205},{Title:'Suriname',Value:206},{Title:'Svalbard',Value:207},{Title:'Swaziland',Value:208},{Title:'Sweden',Value:209},{Title:'Switzerland',Value:210},{Title:'Syria',Value:211},{Title:'Taiwan',Value:212},{Title:'Tajikistan',Value:213},{Title:'Tanzania',Value:214},{Title:'Thailand',Value:215},{Title:'Timorleste',Value:216},{Title:'Togo',Value:217},{Title:'Tokelau',Value:218},{Title:'Tonga',Value:219},{Title:'Trinidad',Value:220},{Title:'Tunisia',Value:221},{Title:'Turkey',Value:222},{Title:'Turkmenistan',Value:223},{Title:'Tuvalu',Value:224},{Title:'Uganda',Value:225},{Title:'Ukraine',Value:226},{Title:'United Arab Emirates',Value:227},{Title:'United States',Value:228},{Title:'Uruguay',Value:229},{Title:'Us Minor Islands',Value:230},{Title:'Us Virgin Islands',Value:231},{Title:'Uzbekistan',Value:232},{Title:'Vanuatu',Value:233},{Title:'Vatican City',Value:234},{Title:'Venezuela',Value:235},{Title:'Vietnam',Value:236},{Title:'Wallis and Futuna',Value:237},{Title:'Western Sahara',Value:238},{Title:'Yemen',Value:239},{Title:'Zambia',Value:240},{Title:'Zimbabwe',Value:241}
            ]},
            { Type: 'MultiLineText' },
            { Type: 'CheckBox' },
            { Type: 'Auto' }
        ]
    };
    // Controls / Type : Auto , TextBox , CheckBox , RadioButton , DropDownList , TextA
    StyleList_Semantic = [ 
    // 0
    `<form class="ui form"> 
        CONTENT
    </form>`
    , // 1 
    `<div class="FIELD_CLASS">
        CONTENT
    </div>`
    ,// 2
    `<input type="text" name="INPUT_TITLE" placeholder="INPUT_PHOLDER">`
    ,// 3
    `<div class="ui checkbox">
        <input type="checkbox" tabindex="0" class="hidden">
        <label>TITLE</label>
    </div>`
    ,// 4
    `<button class="ui button" type="submit">TITLE</button>`
    ,// 5 
    `<div class="ui radio checkbox">
        <input type="radio" name="NAME" tabindex="0" class="hidden" vlaue="VALUE">
        <label>TITLE</label>
    </div>`
    ,// 6
    `<label>TITLE</label>`
    ,// 7
    `<div class="ui selection dropdown">
        <input type="hidden" name="NAME">
        <i class="dropdown icon"></i>
        <div class="default text">D_TITLE</div>
        <div class="menu">
            <div class="item" data-value="VALUE">TITLE</div>
        </div>
    </div`
    ,// 8
    `<textarea></textarea>`
    ,// 9
    `<div class="ui checkbox">
        <input type="checkbox" tabindex="0" class="hidden">
        <label>TITLE</label>
    </div>`
        ];

    Init = function (idContainer) {

        var elContainer = $('#'+idContainer);
        var l = this.StyleList_Semantic;
        var t = this.TempTableInfo;
        var sumHtml = '';
        for (let i = 0; i < t.Columns.length; i++) {           
            const f = t.Columns[i];
            const ctrl = t.Controls[i];
            let TempControl = '?';
            let TempField = '';
            switch (ctrl.Type) {
                case 'Auto':
                    TempField = l[6].replace('TITLE',f.Title);
                    TempField += l[2]
                        .replace('TITLE',f.Title)
                        .replace('INPUT_Title',f.Name)
                        .replace('INPUT_PHOLDER',f.Title);
                    TempControl = l[1].replace('FIELD_CLASS','field').replace('CONTENT',TempField);
                    break;
                case 'RadioButton':
                    TempField = l[6].replace('TITLE',f.Title);
                    for (let i0 = 0; i0 < ctrl.Items.length; i0++) {
                        const item0 = ctrl.Items[i0];
                        TempField += l[1].replace('FIELD_CLASS','field').replace('CONTENT',
                            l[5]
                            .replace('NAME',item0.Name)
                            .replace('TITLE',item0.Title)
                            .replace('VALUE',item0.Value)
                        );
                    }
                    TempControl = l[1].replace('FIELD_CLASS','inline fields').replace('CONTENT',TempField);
                    break;
                case 'DropDown':
                    TempField = l[6].replace('TITLE',f.Title);
                    var el = document.createElement('div');
                    el.innerHTML = l[7].replace('D_TITLE','Select a Country');
                    var elItem = el.getElementsByClassName('menu')[0];
                    var tempDDItem = elItem.innerHTML;
                    elItem.innerHTML = '';
                    var sumItems = '';
                    for (let it = 0; it < ctrl.Items.length; it++) {
                        const item = ctrl.Items[it];
                        sumItems += tempDDItem.replace('TITLE',item.Title).replace('VALUE',item.Value);
                    }
                    elItem.innerHTML = sumItems;
                    TempControl = l[1].replace('FIELD_CLASS','field').replace('CONTENT',TempField + el.innerHTML);
                    break;
                case 'MultiLineText':
                    TempField = l[6].replace('TITLE',f.Title);
                    TempField += l[8];
                    TempControl = l[1].replace('FIELD_CLASS','field').replace('CONTENT',TempField);
                    break;
                case 'CheckBox':
                        TempField = l[9].replace('TITLE',f.Title);
                        TempControl = l[1].replace('FIELD_CLASS','field').replace('CONTENT',TempField);
                        break;
                default:
                    break;
            }
            sumHtml += TempControl;
            
        }
        sumHtml += l[4].replace('TITLE','Send');
        sumHtml = l[0].replace('FIELD_CLASS','field').replace('CONTENT',sumHtml);
        elContainer.html(sumHtml);
    }

}