const MACOS_APPLE_SILICON_DOWNLOAD_URL =
  'https://github.com/stephensu66/LocalClaw/releases/download/1.0.0/LocalClaw_1.0.0_aarch64.dmg';
const MACOS_INTEL_DOWNLOAD_URL =
  'https://github.com/stephensu66/LocalClaw/releases/download/1.0.0/LocalClaw_1.0.0_Intel.dmg';
const PERSONAL_EMAIL = 'stephen.su66@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/stephen-su-94674a369/';
const GITHUB_URL = 'https://github.com/stephensu66';

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '简体中文' },
  { value: 'fr', label: 'Francais' }
];

const baseData = {
  zh: {
    brandName: 'LocalClaw',
    navItems: [
      { label: '首页', href: '#home' },
      { label: '产品', href: '#products' },
      { label: '前沿问题', href: '#problems' },
      { label: '关于', href: '#about' }
    ],
    languageOptions: [
      { value: 'zh', label: '简体中文' },
      { value: 'en', label: 'English' }
    ],
    pages: {
      home: {
        title: '首页',
        description: '产品概览、下载入口与服务能力总览。'
      },
      products: {
        // title: '产品',
        description: '聚焦核心产品能力、适用场景与功能边界。'
      },
      // problems: {
      //   title: '前沿问题',
      //   description: '展示我们正在解决的关键技术问题与研究方向。'
      // },
      about: {
        // title: '关于',
        description: '了解团队背景、产品理念与合作联系方式。'
      }
    },
    hero: {
      title: '下载 LocalClaw',
      subtitle: '安全可控的桌面智能体工具',
      macButton: '下载 macOS 版本',
      macOptions: [
        {
          label: 'Apple Silicon 芯片',
          description: '适用于 M1 / M2 / M3 / M4 Mac',
          href: MACOS_APPLE_SILICON_DOWNLOAD_URL
        },
        {
          label: 'Intel 芯片',
          description: '适用于 Intel 处理器 Mac',
          href: MACOS_INTEL_DOWNLOAD_URL
        }
      ],
      versionLabel: '当前版本',
      versionValue: 'v1.2.0',
      systemLabel: '支持系统',
      systemValue: 'macOS 11+',
      installGuideLabel: '安装指南',
      installGuideHref: '/legal/download.html?lang=zh',
      legalNoticePrefix: '下载即表示你已阅读并同意',
      privacyPolicyLabel: '《隐私政策》',
      privacyPolicyHref: '/legal/privacy.html?lang=zh',
      userAgreementLabel: '《用户协议》',
      userAgreementHref: '/legal/terms.html?lang=zh',
      downloadNoteLabel: '《下载说明》',
      downloadNoteHref: '/legal/download.html?lang=zh'
    },
    quickFeatures: [
      { label: '安全设置' },
      { label: '远程访问' },
      { label: '多人协作' },
      { label: '企业定制' },
      { label: '联系定制方案', highlight: true }
    ],
    serviceSection: {
      title: '版本与服务',
      subtitle: '当前已提供免费版能力，同时支持升级企业高级版。',
      plans: [
        {
          key: 'free',
          name: '免费版',
          price: '免费',
          period: '本地单机',
          description: '适合个人、开发者、轻量团队试用',
          buttonText: '立即下载',
          buttonDisabled: false,
          features: [
            '一键安装执行，开箱即用，无需手敲命令',
            '数据安全，本地可控，数据本地存储',
            '图形化操作，更易上手',
            '默认中文，适合国内用户',
            '桌面化应用，减少终端依赖',
            '可一键切回原生openclaw系统',
            '自动环境诊断，帮助用户发现常见问题',
            '对话与任务历史本地保存'
          ]
        },
        {
          key: 'advanced',
          name: '高级版',
          badge: '推荐',
          price: '联系销售',
          period: '企业部署',
          description: '适合团队、企业、科研机构、复杂场景',
          buttonText: '联系咨询定制方案',
          buttonDisabled: false,
          features: [
            '支持定制超级智能体，面向科研与企业复杂问题',
            '支持远程部署、统一管理与团队级使用',
            '支持更高等级安全策略、Docker / 沙箱隔离执行',
            '支持更复杂任务编排与团队协同流程',
            '支持企业级本地化配置与团队统一规范',
            '可扩展为团队空间、远程访问与统一后台',
            '在产品化基础上扩展企业级管理能力',
            '远程访问与统一管理后台，支持节点、任务、模型统一查看',
            '团队空间、多用户账号体系、共享工作区',
            '高级权限体系（RBAC），支持管理员、开发者、访客、审计员等角色',
            '提供高级工作流模板，适合企业与科研流程',
            '多设备同步，支持配置、任务、Agent 模板同步',
            '支持私有化部署、内网部署、本地服务器、专有云部署',
            '支持企业 Logo、主题色、默认工作流、默认权限策略',
            '专属技术支持、培训支持、方案咨询、场景共建'
          ]
        }
      ]
    },
    productSection: {
      title: '产品矩阵',
      subtitle: '三条产品线分别服务于本地效率、科研智能与技术社交连接。',
      backToProductsLabel: '返回产品矩阵',
      corePointsTitle: '核心能力',
      scenariosTitle: '应用场景',
      freeLabel: '免费版',
      advancedLabel: '高级版',
      products: [
        {
          key: 'localclaw',
          badge: '桌面智能体',
          name: 'LocalClaw',
          tagline: 'macOS 免费下载',
          summary:
            '面向开发者与团队的本地优先智能体平台，提供可控执行、可观测日志与可追踪权限体系。',
          highlights: [
            'macOS 免费下载，按芯片选择 Apple Silicon 或 Intel 版本',
            '统一任务编排与工具调用接口，便于快速接入业务流程',
            '免费版到高级版可无缝升级，避免重复迁移'
          ],
          downloads: [
            {
              label: 'macOS 免费下载',
              variant: 'primary',
              options: [
                {
                  label: 'Apple Silicon 芯片',
                  description: '适用于 M1 / M2 / M3 / M4 Mac',
                  href: MACOS_APPLE_SILICON_DOWNLOAD_URL
                },
                {
                  label: 'Intel 芯片',
                  description: '适用于 Intel 处理器 Mac',
                  href: MACOS_INTEL_DOWNLOAD_URL
                }
              ]
            }
          ],
          comparisonTitle: '免费版 vs 高级版',
          comparison: [
            { feature: '安装与启动效率', free: '一键开箱即用', advanced: '标准化部署' },
            { feature: '数据与隐私控制', free: '本地存储', advanced: '私有化 + 审计' },
            { feature: '任务与工作流', free: '基础执行', advanced: '复杂编排 + 模板' },
            { feature: '协作能力', free: '个人/轻量', advanced: '团队空间 + 共享' },
            { feature: '权限与安全策略', free: '基础权限', advanced: 'RBAC + 沙箱隔离' },
            { feature: '同步能力', free: '本地为主', advanced: '多设备同步' },
            { feature: '服务支持', free: '-', advanced: '专属支持 + SLA' },
            { feature: '远程管理', free: '-', advanced: '统一后台 + 远程访问' },
            { feature: '定制能力', free: '-', advanced: '品牌/策略/智能体定制' },
          ],
          cta: {
            label: '下载与版本说明',
            href: '/legal/download.html?lang=zh'
          },
          detail: {
            actions: [
              { label: '查看高级服务方案', href: '#home' },
              { label: '联系团队咨询', href: '#about-contact' }
            ],
            corePoints: [
              '本地优先执行架构：任务、日志、权限可在本地闭环',
              '支持 GUI 操作与命令能力并存，降低使用门槛',
              '默认权限策略 + 可审计操作记录，兼顾效率与安全',
              '从个人到团队场景可平滑扩展，不破坏现有流程'
            ],
            scenarios: [
              '个人开发者：快速自动化本地重复任务',
              '小型团队：共享标准化任务模板与执行规范',
              '企业技术团队：作为本地智能执行入口接入内部系统'
            ]
          }
        },
        {
          key: 'super-agent',
          badge: '前沿智能体',
          name: '超级智能体',
          tagline: '面向前沿与科研问题的超级智能体计划',
          summary:
            '参考 DeepMind 式研究路径，打造可解决前沿问题、科研问题与垂直行业复杂问题的超级智能体系统。',
          highlights: [
            '多智能体协同拆解复杂长链任务',
            '跨论文、代码与实验数据的证据整合',
            '支持从问题定义到实验验证的闭环推进'
          ],
          downloads: [],
          comparisonTitle: '',
          comparison: [],
          cta: {
            label: '查看研究方向',
            href: '#problems'
          },
          detail: {
            actions: [
              { label: '查看前沿问题方向', href: '#problems' },
              { label: '提交合作课题', href: '#about-contact' }
            ],
            corePoints: [
              '多智能体协同框架，支持长链任务分解与角色化执行',
              '跨论文、代码、实验数据的证据融合与可验证推理',
              '支持复杂问题的假设生成、实验设计与结果复盘',
              '面向科研与垂直行业可定制 Agent 能力边界'
            ],
            scenarios: [
              '科研团队：文献调研、实验设计与结果分析协同',
              '企业研发：前沿方向预研与技术路径验证',
              '行业机构：复杂决策问题的多源证据辅助推理'
            ]
          }
        },
        {
          key: 'eventa',
          badge: '微信小程序',
          name: 'Eventa',
          tagline: '线下技术社交平台',
          summary:
            '连接开发者、研究者与技术团队的线下技术社交平台，围绕真实问题进行交流、协作与分享。',
          highlights: [
            '活动发现、报名与组织协同',
            '会后讨论沉淀，促进持续学习',
            '围绕主题形成高质量技术连接与合作'
          ],
          downloads: [],
          comparisonTitle: '',
          comparison: [],
          cta: {
            label: '了解社区合作',
            href: '#about'
          },
          detail: {
            actions: [
              { label: '查看社区介绍', href: '#about' },
              { label: '申请活动合作', href: '#about-contact' }
            ],
            corePoints: [
              '面向线下技术活动的一体化组织与协同能力',
              '支持活动前、中、后全流程的信息连接与沉淀',
              '鼓励围绕真实技术问题进行深度交流',
              '帮助个人与团队建立长期技术关系网络'
            ],
            scenarios: [
              '技术社区：组织主题沙龙与专题活动',
              '研发团队：发起线下交流与经验分享',
              '高校/研究机构：连接产学研讨论与合作'
            ]
          }
        }
      ]
    },
    problemSection: {
      // title: '前沿问题',
      subtitle: '**按领域查看人类仍在持续攻关的关键问题，点击分类可展开问题详情、核心难点与参考来源。**\n\n**希望更多人借助大模型与智能体，参与解决真实世界的重要难题，为人类做出贡献。**',
      sourceLabel: '来源',
      categories: [
        {
          key: 'ai',
          label: 'AI',
          items: [
            {
              title: '如何确保 AI 系统始终保留人类监督，而不是实质性替代人的判断权？',
              summary: 'human oversight、透明、公平和人类尊严仍是 AI 伦理核心，说明人类是否保有最终控制权依然是开放议题。',
              sources: [
                {
                  label: 'UNESCO',
                  href: 'https://www.unesco.org/e1n/artificial-intelligence/recommendation-ethics'
                }
              ]
            },
            {
              title: '如何在 AI 广泛部署时防止系统性社会伤害？',
              summary: '这里包括歧视、操控、责任不清、权力集中和对弱势群体的不成比例影响，仍缺少全球一致、可执行的治理解法。',
              sources: [
                {
                  label: 'UNESCO AI Ethics Recommendation',
                  href: 'https://unesdoc.unesco.org/ark%3A/48223/pf0000380455'
                }
              ]
            },
            {
              title: '在分布外环境中，幻觉、稳健性和泛化能力面临的挑战',
              summary: '由于现代生成式人工智能模型本质上是通过数据学习来运行的，因此它们的性能必然受限于训练数据的质量和多样性。这些模型在推理过程中遇到分布外输入时，往往会表现出脆弱性，产生错误、不连贯和不一致的输出。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s44387-025-00018-6' }]
            },
            {
              title: '不确定性量化',
              summary: '在自动驾驶自动化实验中，量化不确定性的能力尤为重要。这类实验利用贝叶斯优化（BO）策略，在选择实验时做出明智的决策。准确的不确定性估计能够帮助这些系统在资源受限的情况下高效地进行探索。传统的量化不确定性的方法（例如，集成学习、MC-Dropout 和后验采样）通常用于小规模模型，但这些方法未必具有良好的校准性。此外，由于需要多次前向传播或维护网络的多个副本，它们在大规模生成式人工智能模型中计算量过大。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s44387-025-00018-6' }]
            },
            {
              title: 'AI大模型处理稀有类别和长尾分布的能力不足',
              summary: '尽管当前的生成式人工智能模型在模拟大多数样本中观察到的“典型”数据模式方面表现出色，但它们难以捕捉在稀有类别或数据分布的厚尾中不常见的“非典型”模式。这可能归因于多种原因，包括选择的标准损失函数并非针对稀有类别的性能而设计，以及数据收集和标注工作中固有的偏差，这些偏差往往偏向于某些类别。在社会实际应用中，对稀有类别或分布的厚尾进行建模的能力对于运营和决策至关重要。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s44387-025-00018-6' }]
            },
            {
              title: '人工智能模型的可解释性和可信度',
              summary: '尽管当前的生成式人工智能框架因其在视觉和语言领域的卓越性能而得到广泛应用，但它们仍然是黑箱系统，无法可靠地解释其推理过程。这使得诊断错误来源或理解模型为何生成特定输出变得困难，即使它们产生正确的结果，也削弱了其可信度。当前人工智能模型的黑箱特性限制了它们在构建可解释理论和识别数据关系方面的效用，从而限制了它们在旨在加速科学发现的应用中的范围。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s44387-025-00018-6' }]
            },
            {
              title: '计算效率和能源需求',
              summary: '生成式人工智能模型在训练和推理过程中都面临着计算效率方面的挑战。此类模型的典型预训练通常需要大量的计算资源。在训练后阶段，虽然单步推理的计算成本可能很高，但多步推理的挑战更大。这在扩散模型中尤为明显，因为生成高质量样本需要迭代数百甚至数千次去噪步骤。对于需要大量采样以捕捉所有可能变化的科学应用而言，这些计算挑战尤其棘手。例如，模拟陆地生态系统的生物多样性需要生成多样化的植被模式，以准确表示地表动态，从而捕捉能量通量以及碳循环和水循环。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s44387-025-00018-6' }]
            },
            {
              title: '无法进行符号推理和做出长远决策',
              summary: '语言模型在其他一些推理任务中却表现不佳, 在精确的符号推理、需要形式逻辑的任务以及系统性的符号操作方面也存在困难。当前一代的生成模型在更高抽象层次上也表现出有限的可靠性，例如推导出新的数学证明或发现新的物理原理。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s44387-025-00018-6' }]
            },
            {
              title: '开放环境中的长链路推理与解法发现',
              summary: '让 AI 在信息不完整、目标变化、需要多步工具调用的真实环境里稳定完成推理，仍是核心未解题。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-09833-y' }]
            },
            {
              title: '高风险场景中的可信 AI',
              summary: '在医疗、金融、公共服务等场景里，AI 还难以同时做到可靠、可审计、可问责。',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-09833-y' }]
            }
          ]
        },
        {
          key: 'math',
          label: '数学',
          items: [
            {
              title: '数论：黎曼猜想',
              summary: '核心在于黎曼 ζ 函数非平凡零点的位置；它和素数分布的精细规律直接相关。',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: '计算复杂性：P vs NP',
              summary: '问题是：能快速验证的解，是否也都能快速求出。',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: '偏微分方程：Navier-Stokes 方程的存在性与光滑性',
              summary: '要证明三维不可压缩 Navier-Stokes 方程的解是否总是存在且保持光滑。',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: '代数几何 / 复几何：Hodge 猜想',
              summary: '问题是某些上同调类是否总能由代数几何对象表示。',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: '数论 / 算术几何：Birch and Swinnerton-Dyer 猜想',
              summary: '它把椭圆曲线有理点的结构，与相应 L 函数在 1 点附近的行为联系起来。',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: '数学物理：Yang-Mills 与质量缺口问题',
              summary: '要严格构造满足量子场论要求的 Yang-Mills 理论，并证明存在正的质量缺口。',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: '机器学习数学基础：深度学习为何在实践中有效',
              summary: '核心是理解深度学习成功的数学机制、局限性，以及如何推广到当前适用范围之外。',
              sources: [
                {
                  label: 'Simons Foundation',
                  href: 'https://www.simonsfoundation.org/grant/nsf-simons-research-collaborations-on-the-mathematical-and-scientific-foundations-of-deep-learning/'
                }
              ]
            },
            {
              title: '开放式数学问题的机器求解',
              summary: '机器在竞赛题和形式化证明上进步明显，但离稳定解决开放数学问题仍很远。',
              sources: [
                { label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-09833-y' },
                {
                  label: 'NSF FRGMS',
                  href: 'https://www.nsf.gov/funding/opportunities/frgms-focused-research-groups-mathematical-sciences/nsf23-621/solicitation'
                }
              ]
            },
            {
              title: '需要新理论方法的重大数学难题',
              summary: '许多数学前沿问题不是算力不够，而是现有理论框架本身还不够。',
              sources: [
                {
                  label: 'NSF FRGMS',
                  href: 'https://www.nsf.gov/funding/opportunities/frgms-focused-research-groups-mathematical-sciences/nsf23-621/solicitation'
                }
              ]
            }
          ]
        },
        {
          key: 'physics',
          label: '物理学',
          items: [
            {
              title: '聚变 / 等离子体物理：如何实现可持续、可工程化的聚变能源？',
              summary: '不是“点火一次”就算解决，而是要同时解决等离子体稳定性、能量约束、材料耐受、重复运行和净能量增益。',
              sources: [
                {
                  label: 'National Academies: High Energy Density Science',
                  href: 'https://www.nationalacademies.org/read/26728/chapter/5'
                }
              ]
            },
            {
              title: '高能量密度物理：极端温压条件下，物质的状态方程和输运规律到底是什么？',
              summary: '这关系到行星内部、恒星环境、惯性约束聚变和极端态物质；实验和理论都还不完整。',
              sources: [
                {
                  label: 'National Academies: High Energy Density Physics',
                  href: 'https://www.nationalacademies.org/read/10544/chapter/5'
                }
              ]
            },
            {
              title: '空间物理 / 空间天气：如何把太阳活动一路预测到地球空间环境和地面影响？',
              summary: '太阳爆发、磁层、电离层、地面基础设施之间是强耦合系统，整体预测仍不成熟。',
              sources: [
                {
                  label: 'NSF geoSpace',
                  href: 'https://www.nsf.gov/funding/opportunities/fdss-faculty-development-geospace-science/506167/nsf23-577/solicitation'
                }
              ]
            },
            {
              title: '天体物理 / 宇宙学：暗物质到底是什么？',
              summary: '它有引力效应，但至今没有被直接确认；候选粒子范围在持续扩大。',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-025-09918-8'
                }
              ]
            },
            {
              title: '宇宙学：暗能量的本质是什么？宇宙为什么加速膨胀？',
              summary: '观测支持宇宙加速膨胀，但驱动机制仍不清楚，标准宇宙学也出现张力。',
              sources: [
                {
                  label: 'Nature Astronomy',
                  href: 'https://www.nature.com/subjects/astronomy-and-astrophysics/nature'
                }
              ]
            },
            {
              title: '量子引力 / 基础理论：如何统一量子力学与引力？',
              summary: '广义相对论和量子理论各自成功，但在同一框架内统一仍未完成。',
              sources: [
                {
                  label: 'Science',
                  href: 'https://www.science.org/doi/10.1126/science.ady6092'
                }
              ]
            },
            {
              title: '引力 / 基础物理：等效原理是否绝对成立？',
              summary: '许多现代基础理论预测会有极微小偏离，若测到将直接指向新物理。',
              sources: [
                {
                  label: 'National Academies: Physical Sciences in Space',
                  href: 'https://www.nationalacademies.org/read/13048/chapter/10'
                }
              ]
            },
            {
              title: '黑洞 / 早期宇宙：早期宇宙中的超大质量黑洞是如何如此之快形成的？',
              summary: 'JWST 看到的一些高红移黑洞过大、过早，形成机制仍是开放问题。',
              sources: [
                {
                  label: 'Nature Astronomy',
                  href: 'https://www.nature.com/articles/s41550-025-02660-1'
                }
              ]
            },
            {
              title: '磁层物理：磁层亚暴究竟由什么触发？',
              summary: '这是地球磁层最剧烈的现象之一，但触发机制仍不清楚。',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s41467-025-65580-8'
                }
              ]
            },
            {
              title: '凝聚态 / 强关联：奇异金属与非常规超导的统一理论是什么？',
              summary: '一些材料的输运行为无法用传统费米液体理论解释，机制仍在争论。',
              sources: [
                {
                  label: 'Science',
                  href: 'https://www.science.org/doi/10.1126/science.abh4273'
                }
              ]
            }
          ]
        },
        {
          key: 'biology',
          label: '生物学',
          items: [
            {
              title: '基因组学 / 发育生物学：如何把基因型准确映射到表型？',
              summary: '同一个基因变异在不同环境、不同发育阶段、不同遗传背景下可能产生完全不同的结果；遗传变异与环境变异如何整合并最终产生结构、功能和适应度仍是核心难题。',
              sources: [
                {
                  label: 'NSF ORCC',
                  href: 'https://www.nsf.gov/funding/opportunities/orcc-organismal-response-climate-change/505963/nsf22-513/solicitation'
                }
              ]
            },
            {
              title: '细胞生物学 / 系统生物学：如何构建真正可预测的 whole-cell model（整细胞模型）？',
              summary: '要把基因调控、代谢、蛋白互作、信号转导、细胞周期等统一到一个可预测模型里，当前距离还很远。',
              sources: [
                {
                  label: 'NSF BIO Centers & Institutes',
                  href: 'https://www.nsf.gov/bio/centers-institutes'
                }
              ]
            },
            {
              title: '合成生物学：一个细胞“最小需要什么”才能维持生命？',
              summary: '这不是列基因清单那么简单，而是要知道哪些功能模块是必需的、哪些可替代、不同环境下边界如何变化。',
              sources: [
                {
                  label: 'NSF BIO Centers & Institutes',
                  href: 'https://www.nsf.gov/bio/centers-institutes'
                }
              ]
            },
            {
              title: '合成生物学 / 起源问题：能否从头构建 synthetic cell（合成细胞）？',
              summary: '难点在于把膜、代谢、信息复制、能量利用和分裂等生命功能整合为一个可持续系统。',
              sources: [
                {
                  label: 'NSF Biology + AI',
                  href: 'https://www.nsf.gov/funding/opportunities/dcl-advancing-research-intersection-biology-artificial'
                }
              ]
            },
            {
              title: '跨尺度生物学：如何从分子一路解释到细胞、个体、群落乃至地球生命系统？',
              summary: '生命过程跨尺度极强，单一层级的规律无法自动外推到更高层级，缺少跨层统一机制。',
              sources: [
                {
                  label: 'NSF Biology Integration Institutes',
                  href: 'https://www.nsf.gov/funding/opportunities/bii-biology-integration-institutes/505684/nsf23-511/solicitation'
                }
              ]
            },
            {
              title: '调控生物学 / 表观遗传：细胞类型特异性的转录调控“语法”到底是什么？',
              summary: '我们知道序列和调控蛋白都重要，但仍难把 DNA 序列、染色质状态和转录结果统一成可泛化规则。',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-024-08391-z'
                }
              ]
            },
            {
              title: '再生生物学：为什么有些动物能完整再生器官甚至身体，而人类基本不能？',
              summary: '这涉及损伤反应、免疫、干细胞、发育程序重用等多个层面，再生触发与限制机制仍是开放问题。',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s42003-023-05505-7'
                }
              ]
            },
            {
              title: '神经生物学 / 屏障生物学：人类血脑屏障如何在真实人类尺度上维持和失稳？',
              summary: '传统动物模型和体外模型可迁移性有限，很多脑病与药物递送问题因此难以稳定外推到人类。',
              sources: [
                {
                  label: 'Nature Neuroscience',
                  href: 'https://www.nature.com/articles/s41593-025-02123-w'
                }
              ]
            },
            {
              title: '生态 / 进化生物学：生物如何在快速气候变化中完成适应，而不是灭绝或分布崩塌？',
              summary: '关键难点是把分子层面的响应机制与个体表现、种群动态、生态系统后果连成可预测链路。',
              sources: [
                {
                  label: 'NSF ORCC',
                  href: 'https://www.nsf.gov/funding/opportunities/orcc-organismal-response-climate-change/505963/nsf22-513/solicitation'
                }
              ]
            },
            {
              title: '生物工程 / 产业化：如何把生物系统稳定、可预测地工业化？',
              summary: '在实验室有效不等于在制造端可稳定放大，流程放大、质量一致性和成本可控仍是关键瓶颈。',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/DELS-BCST-13-01'
                }
              ]
            }
          ]
        },
        {
          key: 'medicine',
          label: '医学',
          items: [
            {
              title: '精准医学：如何预测某个具体患者对某种治疗的反应？',
              summary: '精准医学的核心难点仍是把基因、组学、病史、影像和行为数据整合成个体级疗效预测，这件事还远未稳定做到。',
              sources: [
                {
                  label: 'Nature npj Digital Medicine',
                  href: 'https://www.nature.com/articles/s41746-024-01402-3'
                }
              ]
            },
            {
              title: '数字医疗 / 临床转化：为什么数字生物标志物还没有大规模进入常规临床？',
              summary: '障碍主要在证据生成成本、监管要求、数据偏倚、可重复性和与临床流程整合不足。',
              sources: [
                {
                  label: 'Nature Communications Medicine',
                  href: 'https://www.nature.com/articles/s43856-026-01450-8'
                }
              ]
            },
            {
              title: '肿瘤学：如何实现真正可靠的早筛和早诊，而不是只提高实验室指标？',
              summary: '早癌检测仍卡在灵敏度、特异性、标准化、低资源地区可及性和假阳性管理上。',
              sources: [
                {
                  label: 'PMC Early Cancer Detection Review',
                  href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12359849/'
                }
              ]
            },
            {
              title: '肿瘤学：如何找到可稳定指导用药的预测性和耐药性生物标志物？',
              summary: '临床癌症研究里，预测哪些患者会获益、哪些会耐药，仍被视为最关键的 unmet need 之一。',
              sources: [
                {
                  label: 'npj Precision Oncology',
                  href: 'https://www.nature.com/articles/s41698-026-01295-3'
                }
              ]
            },
            {
              title: '传染病 / 公共卫生：如何遏制抗微生物药物耐药性（AMR）？',
              summary: 'WHO 仍把 AMR 当作需要加速国家和全球响应的重点，说明抗生素耐药远未被控制。',
              sources: [
                {
                  label: 'WHO World Health Assembly',
                  href: 'https://apps.who.int/gb/ebwha/pdf_files/WHA77-REC3/A77_REC3_Interactive_en.pdf'
                }
              ]
            },
            {
              title: '疫苗 / 大流行防范：如何为未知病原体建立更快的疫苗和防疫平台？',
              summary: '重点不只是做出一款疫苗，而是能快速适配新病原体、缩短研发和部署时间。',
              sources: [
                {
                  label: 'Horizon Europe Health',
                  href: 'https://research-and-innovation.ec.europa.eu/document/download/cca383f5-67a6-4b72-a8f2-8b8cd041fa91_en'
                }
              ]
            },
            {
              title: '神经医学 / 老龄化：如何真正延缓或逆转痴呆等神经退行性疾病？',
              summary: 'WHO 持续把痴呆列为全球健康挑战，现实里早诊、机制理解和有效干预都还不足。',
              sources: [
                {
                  label: 'WHO',
                  href: 'https://www.who.int/news-room/spotlight/10-key-global-health-moments-from-2021'
                }
              ]
            },
            {
              title: '精神健康：如何把心理健康服务真正覆盖到人群，而不是停留在政策口号？',
              summary: 'WHO 的世界精神卫生报告强调，当前问题不只是治疗方法，而是可及性、资源和系统性覆盖严重不足。',
              sources: [
                {
                  label: 'WHO World Mental Health Report',
                  href: 'https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content'
                }
              ]
            },
            {
              title: '临床 AI / 数据医学：如何利用大规模真实世界数据学习疾病自然史，并真正改善临床决策？',
              summary: '大规模病史数据预测疾病进程已有进展，但这类模型离广泛、稳健、可解释地进入临床还有距离。',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-025-09529-3'
                }
              ]
            },
            {
              title: '医疗体系 / 全球健康：如何在有限财政下同时提升健康结果、公平性与体系韧性？',
              summary: '医疗前沿问题不只是单病种突破，还包括在财政约束下协调健康、公平、经济韧性和气候韧性的系统级难题。',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/NAM-NAM%20PRGM-25-02/event/46575'
                }
              ]
            }
          ]
        },
        {
          key: 'enterprise',
          label: '企业',
          items: [
            {
              title: '企业 / 工业：全球供应链如何在地缘冲突、气候事件和网络攻击并存下保持韧性？',
              summary: '当前很多供应链方案仍偏短期和局部，难以应对系统性冲击与持续碎片化。',
              sources: [
                {
                  label: 'WEF',
                  href: 'https://www.weforum.org/stories/2025/07/strengthening-manufacturing-supply-chains-new-industrial-era/'
                }
              ]
            },
            {
              title: '企业 / 工业：在全球分化与监管分裂加剧时，企业如何重构跨区域供应链？',
              summary: '供应链不只是成本优化问题，还要同时处理保护主义、区域化和监管分歧。',
              sources: [
                {
                  label: 'WEF',
                  href: 'https://www.weforum.org/stories/2025/06/how-supply-chains-need-to-adapt-to-a-shifting-global-landscape/'
                }
              ]
            },
            {
              title: '企业 / 工业：先进制造业如何缩短新员工的岗位胜任时间？',
              summary: '复杂岗位训练慢、老员工退休快，直接拖累生产率和扩产能力。',
              sources: [
                {
                  label: 'McKinsey Workforce',
                  href: 'https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/investing-in-the-manufacturing-workforce-to-accelerate-productivity'
                }
              ]
            },
            {
              title: '企业 / 工业：数字化和 AI 投入后，为什么生产率仍难持续提升？',
              summary: '很多企业已经数字化，但 ROI、组织协同和流程重构仍不足以带来持续生产率跃升。',
              sources: [
                {
                  label: 'McKinsey Operations 2025',
                  href: 'https://www.mckinsey.com/capabilities/operations/our-insights/powering-productivity-operations-insights-for-2025'
                }
              ]
            },
            {
              title: '企业 / 工业：如何建立可量化的供应链成熟度评估，而不只凭经验判断风险？',
              summary: '原材料、制造环节和劳动力 readiness 往往分散评估，缺少统一、可比较的 readiness 体系。',
              sources: [
                {
                  label: 'DOE SCRL',
                  href: 'https://www.energy.gov/sites/default/files/2025-01/Identifying_Risks_in_the_Energy_Industrial_Base-Supply_Chain_Readiness_Levels_vFinalPublication.pdf'
                }
              ]
            },
            {
              title: '企业 / 工业：能源制造链条里，哪些原材料和制造步骤是最脆弱的瓶颈？',
              summary: '原材料、加工和制造步骤的 readiness 差异很大，很多环节仍是低 readiness。',
              sources: [
                {
                  label: 'DOE SCRL Preliminary Analysis',
                  href: 'https://www.energy.gov/sites/default/files/2024-12/Supply_Chain_Readiness_Level_SCRL_Analysis_Nov-2024_2024.12.20.pdf'
                }
              ]
            },
            {
              title: '企业 / 工业：如何把先进制造技术更快从研发转到规模化应用？',
              summary: '技术转移、scale-up 和 workforce development 仍是先进制造落地的核心障碍。',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/our-work/a-vision-for-the-manufacturing-usa-program-in-2030-and-2035'
                }
              ]
            },
            {
              title: '企业 / 工业：新型能源与工业技术如何跨过商业化死亡谷？',
              summary: '从技术成熟到可商业化，往往卡在制造工艺、成本、质量一致性和市场导入。',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/DEPS-BEES-20-01'
                }
              ]
            },
            {
              title: '企业 / 工业：制造业如何把韧性变成转型的基础能力，而不是附加项？',
              summary: '传统制造转型更重效率，但在当前风险环境下，韧性本身成为核心能力。',
              sources: [
                {
                  label: 'WEF',
                  href: 'https://www.weforum.org/stories/2025/06/this-is-the-next-stage-in-manufacturing-s-evolution/'
                }
              ]
            },
            {
              title: '企业 / 工业：高端制造领域如何解决长期技能短缺与人才断层？',
              summary: '不少关键产业的扩张不是先卡设备，而是先卡熟练劳动力供给与训练体系。',
              sources: [
                {
                  label: 'McKinsey Shipbuilding Workforce',
                  href: 'https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/helming-a-sea-change-building-the-future-workforce-for-us-shipbuilding'
                }
              ]
            },
            {
              title: '企业 / 工业：航空维修等高可靠行业如何缓解技术工种短缺？',
              summary: '高可靠行业对技能要求高、训练周期长，人才缺口直接影响产能和安全。',
              sources: [
                {
                  label: 'McKinsey Aviation Maintenance',
                  href: 'https://www.mckinsey.com/industries/travel/our-insights/addressing-the-shortage-of-aviation-maintenance-technicians'
                }
              ]
            },
            {
              title: '企业 / 工业：AI、智能体和机器人如何真正与人形成高效分工，而不是制造新摩擦？',
              summary: '工业现场的问题不只是是否自动化，而是人、Agent、机器人之间如何稳定协同。',
              sources: [
                {
                  label: 'McKinsey MGI',
                  href: 'https://www.mckinsey.com/mgi/our-research/agents-robots-and-us-skill-partnerships-in-the-age-of-ai'
                },
              ]
            }
          ]
        },
        {
          key: 'chemistry',
          label: '化学',
          items: [
            {
              title: '反应发现 / 计算化学：如何自动发现复杂体系中的完整反应路径？',
              summary: '反应步数一多，可能路径数量会指数级增长；到今天，预测所有化学反应仍被明确称为一个重大挑战。',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s42004-025-01630-y'
                }
              ]
            },
            {
              title: '催化化学：如何更快发现真正可用的新催化反应？',
              summary: '催化几乎涉及大多数化工过程，但新催化过程的发现速度仍远跟不上能源、燃料和高值化学品转型需求。',
              sources: [
                {
                  label: 'Grand Challenges in Catalysis',
                  href: 'https://www.sciencedirect.com/science/article/abs/pii/S0920586121004569'
                },
                {
                  label: 'DOE OSTI Catalysis Report',
                  href: 'https://science.osti.gov/-/media/bes/besac/pdf/catalysis_report.pdf'
                }
              ]
            },
            {
              title: '催化机理：如何把催化剂结构稳定映射到活性、选择性和寿命？',
              summary: '连接 catalyst structure 与 catalytic chemistry 到今天仍是催化设计最核心的未解题之一。',
              sources: [
                {
                  label: 'DOE OSTI Catalysis Report',
                  href: 'https://science.osti.gov/-/media/bes/besac/pdf/catalysis_report.pdf'
                }
              ]
            },
            {
              title: '绿色化学 / 电化学：如何在风电、光伏这类间歇性电力输入下，仍稳定完成化学合成？',
              summary: '可再生能源波动会让常见 3d 金属催化剂在小幅电位变化下也发生降解，因此用间歇性能源驱动化学合成仍是 major challenge。',
              sources: [
                {
                  label: 'Nature Sustainability',
                  href: 'https://www.nature.com/articles/s41893-025-01665-y'
                }
              ]
            },
            {
              title: '手性合成 / 自由基化学：如何稳定控制自由基反应的立体选择性？',
              summary: '自由基反应活性高、路径复杂，因此对其进行精确立体控制至今仍被明确视为 major challenge。',
              sources: [
                {
                  label: 'Nature Chemistry',
                  href: 'https://www.nature.com/nchem/volumes/17/issues/12'
                }
              ]
            },
            {
              title: '二氧化碳与氮气转化：如何把 CO2 和 N2 高效转化为有价值化学品与燃料？',
              summary: '这两个分子资源丰富但化学惰性强，真正做到高选择性、低能耗、可放大转换仍是绿色化学核心难题。',
              sources: [
                {
                  label: 'ScienceDirect Review',
                  href: 'https://www.sciencedirect.com/science/article/abs/pii/S2095927325009168'
                }
              ]
            },
            {
              title: '催化剂设计：如何跨反应空间设计新催化剂，而不是只在已知反应类别里微调？',
              summary: '现有很多 AI 和生成式方法仍受限于特定反应类别和预定义片段，难以真正探索更广的 catalyst design space。',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s42004-025-01732-7'
                }
              ]
            },
            {
              title: '可持续化工：如何把可持续化学从实验室路线稳定放大到工业规模？',
              summary: '实验室可行不等于制造端经济、稳定、可持续，scale-up 仍是可持续化学落地的关键难点。',
              sources: [
                {
                  label: 'DOE Sustainable Chemistry',
                  href: 'https://www.energy.gov/sites/default/files/2025-01/iedo-sustainable-chemistry-roundtable-report.pdf'
                },
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/DELS-BCST-22-01'
                }
              ]
            }
          ]
        },
        {
          key: 'materials',
          label: '材料学',
          items: [
            {
              title: '材料发现：如何从已知材料分布之外，可靠发现真正新的高性能材料？',
              summary: '许多模型在训练分布内预测还行，但一到超出已知分布的材料性质外推就容易失效，这直接限制了发现突破性新材料的能力。',
              sources: [
                {
                  label: 'Nature Computational Materials',
                  href: 'https://www.nature.com/articles/s41524-025-01808-x'
                },
                {
                  label: 'Foundation Models Review',
                  href: 'https://www.nature.com/articles/s41524-025-01538-0'
                }
              ]
            },
            {
              title: '材料合成：如何为目标材料设计可行、可复现的合成路线？',
              summary: '找到想要什么材料和怎么把它稳定做出来是两回事，识别有前景的合成目标并设计其路线仍是材料科学中的核心挑战。',
              sources: [
                {
                  label: 'Nature Computational Science',
                  href: 'https://www.nature.com/subjects/materials-science/natcomputsci'
                }
              ]
            },
            {
              title: '材料基因组 / 转化：如何把材料从设计、发现加速到开发、部署与降本？',
              summary: '材料学长期卡在从实验室发现到工程部署的长链条上，加速设计、发现、开发、部署并降低成本仍是系统性难题。',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/publications/26723'
                }
              ]
            },
            {
              title: '中试与放大：如何建立足够的中试制造与表征能力，让新材料真正跨过实验室到工程的死亡谷？',
              summary: '很多新材料不是没有性能，而是缺少足够的 mid-scale 制造与极端环境表征能力，导致工程可用性和可重复性无法验证。',
              sources: [
                {
                  label: 'National Academies Workshop',
                  href: 'https://www.nationalacademies.org/event/44391_03-2025_part-2-of-a-workshop-on-mid-scale-manufacturing-characterization-capacity-accelerating-scale-up-and-transition-of-technologies-to-mitigate-dod-critical-materials-supply-challenges'
                }
              ]
            },
            {
              title: '关键材料供应链：如何降低能源转型所需关键材料的供应链中断风险？',
              summary: '关键材料既对储能、发电、输电等技术至关重要，又面临较高供应链中断风险，这说明性能足够并不等于供应安全。',
              sources: [
                {
                  label: 'DOE Critical Minerals and Materials',
                  href: 'https://www.energy.gov/sites/default/files/2025-01/critical-minerals-materials-program-january2025.pdf'
                },
                {
                  label: 'DOE 2023 Assessment',
                  href: 'https://www.energy.gov/sites/default/files/2023-07/doe-critical-material-assessment_07312023.pdf'
                }
              ]
            },
            {
              title: '清洁能源材料：如何为电池、电网、核能、氢能等清洁能源链条建立既可竞争又可持续的材料与制造体系？',
              summary: '材料问题已经不是单一材料性能，而是关键产品成本、全球成本曲线、上游矿物与材料能力共同决定的全链条产业竞争力问题。',
              sources: [
                {
                  label: 'DOE MESC FY2025',
                  href: 'https://www.energy.gov/sites/default/files/2024-12/FY2025_MMAC_Lab_Call_FINAL.pdf'
                },
                {
                  label: 'DOE SCRL Analysis',
                  href: 'https://www.energy.gov/sites/default/files/2024-12/Supply_Chain_Readiness_Level_%28SCRL%29_Analysis_Nov2024--2024.12.04.pdf'
                }
              ]
            },
            {
              title: '极端条件材料：如何在高压、极端温度、强辐照等条件下发现并稳定利用新型材料？',
              summary: '高压科学不断产生有潜力的非常规材料，但把这些材料稳定表征、理解机制并转向工程应用仍是前沿难题。',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/d42473-025-00380-8'
                }
              ]
            },
            {
              title: '生成式材料设计：生成模型能否真正设计出可合成、可稳定、满足目标性质的新材料？',
              summary: '生成模型已经显著提高新且稳定候选的比例，但距离稳定、可实验复现、可量产的全链路闭环还没有打通。',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-025-08628-5'
                },
                {
                  label: 'Nature Computational Materials Review',
                  href: 'https://www.nature.com/articles/s41524-025-01538-0'
                }
              ]
            },
            {
              title: '标准与部署：哪些标准、共性方法和政策障碍正在阻碍先进材料进入真实应用？',
              summary: '先进材料面向真实应用的难点不仅在性能，也在理解缺口、标准、共性方法和政策障碍等系统性因素。',
              sources: [
                {
                  label: 'National Academies Study',
                  href: 'https://www.nationalacademies.org/projects/TRB-CAAS-23-01/event/44056'
                }
              ]
            }
          ]
        },
        {
          key: 'other',
          label: '其他',
          items: [
            {
              title: '其他（气候）：如何让城市在 2030 年前真正实现气候中和？',
              summary: '难点不在提出目标，而在能源、交通、建筑、融资和治理要同时协同落地。',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe/climate-neutral-and-smart-cities_en'
                }
              ]
            },
            {
              title: '其他（气候）：如何让地区和社区真正具备气候适应能力？',
              summary: '关键问题是把风险识别、适应路径设计和实际实施落到社区尺度，而不是停留在政策口号。',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe/adaptation-climate-change_en'
                }
              ]
            },
            {
              title: '其他（海洋与水）：如何在 2030 年前真正恢复海洋与水体生态，而不只是局部治理？',
              summary: '这涉及污染、生态修复、跨流域治理、技术和政策协同，仍是系统级未解问题。',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe_en'
                }
              ]
            },
            {
              title: '其他（土壤与农业）：如何恢复土壤健康并建立可持续农业土壤体系？',
              summary: '挑战在于土壤退化是长期、区域化、与农业和生态系统强耦合的问题。',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe_en'
                }
              ]
            },
            {
              title: '其他（灾害科学）：如何提前识别火山喷发前兆并更准确预测喷发时间与影响？',
              summary: '这关系到监测、预警和灾害减缓，仍被定义为火山科学中的 grand challenges。',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/read/24650/chapter/9'
                }
              ]
            },
            {
              title: '其他（劳动与社会）：技术变革下如何避免大规模技能错配与岗位断层？',
              summary: '技能缺口仍是企业转型的最大障碍之一，这说明 AI 和自动化来了之后，人如何跟上仍是未解题。',
              sources: [
                {
                  label: 'WEF Future of Jobs',
                  href: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/'
                }
              ]
            }
          ]
        }
      ]
    },
    aboutSection: {
      title: '公司介绍',
      description:
        '北京超维引力科技有限公司是一家专注于智能体产品、复杂问题求解与前沿技术落地的科技公司。我们致力于打造更易用、更本地化、更可控的 AI 产品，让先进智能能力不再局限于命令行和少数技术人群，而能够真正服务个人、团队、企业与科研场景。\n\n围绕 LocalClaw，我们持续降低本地智能体的使用门槛；\n围绕超级智能体方向，我们探索面向科研与工业复杂问题的高阶智能体系统；\n同时，我们也关注全球前沿科学与工业领域中尚未解决的重要问题，推动产品能力与真实问题之间的连接。',
      contactTitle: '联系我们',
      contacts: [
        { label: '联系电话', value: '18811753654', href: 'tel:18811753654' },
        { label: '个人邮箱', value: PERSONAL_EMAIL, href: `mailto:${PERSONAL_EMAIL}` },
        { label: 'LinkedIn', value: 'Stephen Su', href: LINKEDIN_URL, external: true },
        { label: 'GitHub', value: 'stephensu66', href: GITHUB_URL, external: true }
      ],
      button: '联系我们'
    },
    footer: {
      placeholderText: '待填写',
      linkGroups: [
        {
          title: '社区',
          links: [
            { label: 'Roadmap', href: '#' },
            { label: '提交 Bug', href: '#' },
            { label: '安全问题报告', href: '#' }
          ]
        },
        {
          title: '关于',
          links: [
            { label: '关于我们', href: '#about' },
            { label: '联系方式', href: '#about-contact' },
            { label: '隐私政策', href: '/legal/privacy.html?lang=zh' },
            { label: '用户协议', href: '/legal/terms.html?lang=zh' }
          ]
        },
        {
          title: '支持',
          links: [
            { label: '使用帮助', href: '#' },
            { label: '服务器手册', href: '#' },
            { label: '下载说明', href: '/legal/download.html?lang=zh' }
          ]
        }
      ],
      companyInfo: [
        { label: '联系电话', value: '18811753654' },
        { label: '个人邮箱', value: PERSONAL_EMAIL, href: `mailto:${PERSONAL_EMAIL}` },
        {
          label: 'ICP备案号',
          value: '京ICP备2025142068号-1',
          href: 'https://beian.miit.gov.cn/#/Integrated/index'
        }
      ],
      socialLinks: [
        { label: 'Email', href: `mailto:${PERSONAL_EMAIL}` },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
        { label: 'GitHub', href: GITHUB_URL, external: true }
      ],
      copyright: 'Copyright ©2026 北京超维引力科技有限公司 版权所有'
    }
  },
  en: {
    brandName: 'LocalClaw',
    navItems: [
      { label: 'Home', href: '#home' },
      { label: 'Products', href: '#products' },
      { label: 'Frontier', href: '#problems' },
      { label: 'About', href: '#about' }
    ],
    languageOptions: [
      { value: 'zh', label: '简体中文' },
      { value: 'en', label: 'English' }
    ],
    pages: {
      home: {
        title: 'Home',
        description: 'Overview of product capabilities, download entry, and services.'
      },
      products: {
        title: 'Products',
        description: 'Core product capabilities, use cases, and functional scope.'
      },
      problems: {
        title: 'Frontier Problems',
        description: 'Key technical challenges and research directions we are addressing.'
      },
      about: {
        title: 'About',
        description: 'Team background, product philosophy, and partnership contact.'
      }
    },
    hero: {
      title: 'Download LocalClaw',
      subtitle: 'A secure and controllable desktop agent tool',
      macButton: 'Download for macOS',
      macOptions: [
        {
          label: 'Apple Silicon',
          description: 'For M1 / M2 / M3 / M4 Macs',
          href: MACOS_APPLE_SILICON_DOWNLOAD_URL
        },
        {
          label: 'Intel',
          description: 'For Intel-based Macs',
          href: MACOS_INTEL_DOWNLOAD_URL
        }
      ],
      versionLabel: 'Version',
      versionValue: 'v1.2.0',
      systemLabel: 'Systems',
      systemValue: 'macOS 11+',
      installGuideLabel: 'Installation Guide',
      installGuideHref: '/legal/download.html?lang=en',
      legalNoticePrefix: 'By downloading, you agree to',
      privacyPolicyLabel: 'Privacy Policy',
      privacyPolicyHref: '/legal/privacy.html?lang=en',
      userAgreementLabel: 'Terms of Service',
      userAgreementHref: '/legal/terms.html?lang=en',
      downloadNoteLabel: 'Download Notes',
      downloadNoteHref: '/legal/download.html?lang=en'
    },
    quickFeatures: [
      { label: 'Security Settings' },
      { label: 'Remote Access' },
      { label: 'Team Collaboration' },
      { label: 'Enterprise Customization' },
      { label: 'Contact for Custom Plan', highlight: true }
    ],
    serviceSection: {
      title: 'Plans & Advanced Service',
      subtitle: 'The Free plan is available now, with an upgrade path to Advanced enterprise service.',
      plans: [
        {
          key: 'free',
          name: 'Free',
          price: 'Free',
          period: 'Single-machine local',
          description: 'Best for individual development, MVP validation, and local debugging',
          buttonText: 'Current Plan',
          buttonDisabled: true,
          features: [
            'Three-layer architecture: Web console + Desktop shell + Local Service',
            'Unified local APIs (config/tasks/permissions/agent/events)',
            'Task orchestration, persistence, logs, and SSE real-time streaming',
            'Config sync with OpenClaw (model mode/workdir/API key)',
            'Default-deny permission model with explicit grants',
            'Prisma + SQLite local persistence for config/tasks/logs/permissions',
            'Switchable mock / real runtime modes for dev and production paths',
            'Onboarding setup flow and local health-check capability'
          ]
        },
        {
          key: 'advanced',
          name: 'Advanced',
          badge: 'Recommended',
          price: 'Contact Sales',
          period: 'Enterprise deployment',
          description: 'Designed for production teams and enterprise compliance',
          buttonText: 'Contact for Plan',
          buttonDisabled: false,
          features: [
            'Multi-member workspace with role-based access control',
            'Centralized audit trails, approvals, and operation traceability',
            'Enterprise security with SSO/MFA and policy-based access',
            'Private deployment and intranet isolation for data sovereignty',
            'Enhanced remote access and cross-region collaboration',
            'Integration with internal systems (ticketing/knowledge/notification)',
            'Central billing, quota management, and org-level governance',
            'Dedicated onboarding, SLA support, and custom capability extension'
          ]
        }
      ]
    },
    productSection: {
      title: 'Product Portfolio',
      subtitle: 'Three product lines for local productivity, frontier intelligence, and technical community.',
      backToProductsLabel: 'Back to Product Portfolio',
      corePointsTitle: 'Core Capabilities',
      scenariosTitle: 'Use Cases',
      freeLabel: 'Free',
      advancedLabel: 'Advanced',
      products: [
        {
          key: 'localclaw',
          badge: 'Desktop Agent',
          name: 'LocalClaw',
          tagline: 'Free on macOS',
          summary:
            'A local-first agent platform for developers and teams, with controllable execution, observable logs, and traceable permission controls.',
          highlights: [
            'Free macOS download with Apple Silicon and Intel builds',
            'Unified orchestration and tool-calling interfaces for workflows',
            'Smooth upgrade path from free to enterprise advanced plan'
          ],
          downloads: [
            {
              label: 'Download for macOS',
              variant: 'primary',
              options: [
                {
                  label: 'Apple Silicon',
                  description: 'For M1 / M2 / M3 / M4 Macs',
                  href: MACOS_APPLE_SILICON_DOWNLOAD_URL
                },
                {
                  label: 'Intel',
                  description: 'For Intel-based Macs',
                  href: MACOS_INTEL_DOWNLOAD_URL
                }
              ]
            }
          ],
          comparisonTitle: 'Free vs Advanced',
          comparison: [
            { feature: 'Setup and onboarding', free: 'One-click start', advanced: 'Standardized rollout' },
            { feature: 'Data and privacy control', free: 'Local storage', advanced: 'Private + auditable' },
            { feature: 'Task and workflow depth', free: 'Basic execution', advanced: 'Advanced orchestration' },
            { feature: 'Collaboration capability', free: 'Individual/light', advanced: 'Workspace + sharing' },
            { feature: 'Security and permissions', free: 'Basic control', advanced: 'RBAC + sandbox' },
            { feature: 'Remote management', free: '-', advanced: 'Unified console + remote access' },
            { feature: 'Sync capability', free: 'Local-first', advanced: 'Multi-device sync' },
            { feature: 'Customization', free: '-', advanced: 'Brand/policy/agent customization' },
            { feature: 'Support model', free: 'Community support', advanced: 'Dedicated support + SLA' }
          ],
          cta: {
            label: 'Download & Notes',
            href: '/legal/download.html?lang=en'
          },
          detail: {
            actions: [
              { label: 'See Advanced Service Plan', href: '#home' },
              { label: 'Talk to Our Team', href: '#about-contact' }
            ],
            corePoints: [
              'Local-first execution architecture with traceable logs and permissions',
              'GUI and command capabilities combined for different user habits',
              'Default permission policies with auditable operation history',
              'Scales from individual workflows to team-level practices'
            ],
            scenarios: [
              'Individual developers automating repetitive local tasks',
              'Small teams sharing standardized task templates',
              'Enterprise engineering teams integrating internal workflows'
            ]
          }
        },
        {
          key: 'super-agent',
          badge: 'Frontier Intelligence',
          name: 'Super Agent',
          tagline: 'A super-agent initiative for frontier and research problems',
          summary:
            'Inspired by DeepMind-style research directions, built for frontier, scientific, and vertical-domain complex problem solving.',
          highlights: [
            'Multi-agent collaboration for long-horizon tasks',
            'Cross-paper, code, and experiment evidence integration',
            'Closed-loop flow from problem framing to experiment validation'
          ],
          downloads: [],
          comparisonTitle: '',
          comparison: [],
          cta: {
            label: 'Explore Research Directions',
            href: '#problems'
          },
          detail: {
            actions: [
              { label: 'Explore Frontier Topics', href: '#problems' },
              { label: 'Submit Collaboration Proposal', href: '#about-contact' }
            ],
            corePoints: [
              'Multi-agent framework for long-horizon decomposition and execution',
              'Evidence fusion across papers, code, and experiment datasets',
              'Supports hypothesis generation, experiment design, and retrospectives',
              'Customizable agent boundaries for science and vertical domains'
            ],
            scenarios: [
              'Research teams for literature-to-experiment workflows',
              'R&D organizations for frontier technology validation',
              'Industry institutions for complex evidence-based reasoning'
            ]
          }
        },
        {
          key: 'eventa',
          badge: 'WeChat Mini Program',
          name: 'Eventa',
          tagline: 'Offline technical social platform',
          summary:
            'An offline technical social platform connecting developers, researchers, and teams around real-world technical topics.',
          highlights: [
            'Event discovery, registration, and organization',
            'Post-event discussion and knowledge continuation',
            'High-quality technical connections and collaboration opportunities'
          ],
          downloads: [],
          comparisonTitle: '',
          comparison: [],
          cta: {
            label: 'Community & Partnership',
            href: '#about'
          },
          detail: {
            actions: [
              { label: 'See Community Overview', href: '#about' },
              { label: 'Apply for Event Partnership', href: '#about-contact' }
            ],
            corePoints: [
              'Integrated collaboration tools for offline technical events',
              'Connects pre-event, on-site, and post-event interactions',
              'Encourages deep discussion around real engineering challenges',
              'Helps individuals and teams build long-term technical networks'
            ],
            scenarios: [
              'Tech communities organizing themed offline sessions',
              'Engineering teams hosting practical exchange events',
              'Universities and labs connecting cross-domain collaborators'
            ]
          }
        }
      ]
    },
    problemSection: {
      title: 'Frontier Problems',
      subtitle: 'Browse key challenges by domain. Click a category to expand details and references.',
      sourceLabel: 'Source',
      categories: [
        {
          key: 'ai',
          label: 'AI',
          items: [
            {
              title: 'Long-horizon reasoning and solution discovery in open environments',
              summary:
                'Enabling AI to reason reliably in incomplete, shifting, tool-heavy real environments remains a core open problem.',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-09833-y' }]
            },
            {
              title: 'Trustworthy AI in high-risk settings',
              summary:
                'In healthcare, finance, and public services, AI still struggles to be reliable, auditable, and accountable at the same time.',
              sources: [{ label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-09833-y' }]
            }
          ]
        },
        {
          key: 'math',
          label: 'Mathematics',
          items: [
            {
              title: 'Number Theory: Riemann Hypothesis',
              summary:
                'The core question concerns the non-trivial zeros of the Riemann zeta function, which directly govern fine-grained patterns in prime distribution.',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: 'Computational Complexity: P vs NP',
              summary: 'The question is whether every problem whose solution can be verified quickly can also be solved quickly.',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: 'Partial Differential Equations: Existence and Smoothness of Navier-Stokes',
              summary:
                'The challenge is to prove whether 3D incompressible Navier-Stokes solutions always exist and remain smooth.',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: 'Algebraic / Complex Geometry: Hodge Conjecture',
              summary:
                'It asks whether certain cohomology classes can always be represented by algebraic geometric objects.',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: 'Number Theory / Arithmetic Geometry: Birch and Swinnerton-Dyer Conjecture',
              summary:
                'It links the structure of rational points on elliptic curves with the behavior of their L-functions near 1.',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: 'Mathematical Physics: Yang-Mills and the Mass Gap',
              summary:
                'The goal is to rigorously construct a Yang-Mills theory compatible with quantum field theory and prove a positive mass gap.',
              sources: [{ label: 'Clay Mathematics Institute', href: 'https://www.claymath.org/millennium-problems' }]
            },
            {
              title: 'Mathematical Foundations of ML: Why Deep Learning Works in Practice',
              summary:
                'The key is to explain the mathematical mechanisms behind deep learning success, its limits, and how to extend beyond its current regime.',
              sources: [
                {
                  label: 'Simons Foundation',
                  href: 'https://www.simonsfoundation.org/grant/nsf-simons-research-collaborations-on-the-mathematical-and-scientific-foundations-of-deep-learning/'
                }
              ]
            },
            {
              title: 'Machine solving of open-ended mathematical problems',
              summary:
                'Progress is strong in contest problems and formal proofs, but robust performance on open mathematical problems is still far away.',
              sources: [
                { label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-09833-y' },
                {
                  label: 'NSF FRGMS',
                  href: 'https://www.nsf.gov/funding/opportunities/frgms-focused-research-groups-mathematical-sciences/nsf23-621/solicitation'
                }
              ]
            },
            {
              title: 'Major mathematical challenges requiring new theory',
              summary: 'Many frontier math problems are limited by theoretical frameworks rather than raw compute.',
              sources: [
                {
                  label: 'NSF FRGMS',
                  href: 'https://www.nsf.gov/funding/opportunities/frgms-focused-research-groups-mathematical-sciences/nsf23-621/solicitation'
                }
              ]
            }
          ]
        },
        {
          key: 'physics',
          label: 'Physics',
          items: [
            {
              title: 'Fusion / Plasma Physics: How can we achieve sustainable, engineering-ready fusion energy?',
              summary:
                'The challenge is not a single ignition event, but jointly solving plasma stability, confinement, material endurance, repeatable operation, and net energy gain.',
              sources: [
                {
                  label: 'National Academies: High Energy Density Science',
                  href: 'https://www.nationalacademies.org/read/26728/chapter/5'
                }
              ]
            },
            {
              title: 'High-Energy-Density Physics: What are the equations of state and transport laws under extreme temperature and pressure?',
              summary:
                'This is central to planetary interiors, stellar environments, inertial fusion, and extreme states of matter, yet both experiments and theory remain incomplete.',
              sources: [
                {
                  label: 'National Academies: High Energy Density Physics',
                  href: 'https://www.nationalacademies.org/read/10544/chapter/5'
                }
              ]
            },
            {
              title: 'Space Physics / Space Weather: How can we predict from solar activity to near-Earth space and ground impact?',
              summary:
                'Solar eruptions, the magnetosphere, ionosphere, and ground infrastructure are strongly coupled, and end-to-end prediction is still immature.',
              sources: [
                {
                  label: 'NSF geoSpace',
                  href: 'https://www.nsf.gov/funding/opportunities/fdss-faculty-development-geospace-science/506167/nsf23-577/solicitation'
                }
              ]
            },
            {
              title: 'Astrophysics / Cosmology: What is dark matter?',
              summary:
                'Its gravitational effects are clear, but direct confirmation is still missing and the candidate space keeps expanding.',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-025-09918-8'
                }
              ]
            },
            {
              title: 'Cosmology: What is the nature of dark energy, and why is the universe accelerating?',
              summary:
                'Observations support accelerated expansion, but the driving mechanism remains unclear and tensions in standard cosmology persist.',
              sources: [
                {
                  label: 'Nature Astronomy',
                  href: 'https://www.nature.com/subjects/astronomy-and-astrophysics/nature'
                }
              ]
            },
            {
              title: 'Quantum Gravity / Fundamental Theory: How can quantum mechanics and gravity be unified?',
              summary:
                'General relativity and quantum theory are each successful, but a single unified framework is still unresolved.',
              sources: [
                {
                  label: 'Science',
                  href: 'https://www.science.org/doi/10.1126/science.ady6092'
                }
              ]
            },
            {
              title: 'Gravity / Fundamental Physics: Does the equivalence principle hold exactly?',
              summary:
                'Many modern theories predict tiny deviations; detecting one would directly point to new physics.',
              sources: [
                {
                  label: 'National Academies: Physical Sciences in Space',
                  href: 'https://www.nationalacademies.org/read/13048/chapter/10'
                }
              ]
            },
            {
              title: 'Black Holes / Early Universe: How did supermassive black holes form so quickly in the early universe?',
              summary:
                'Some high-redshift black holes seen by JWST appear too massive too early, leaving formation pathways open.',
              sources: [
                {
                  label: 'Nature Astronomy',
                  href: 'https://www.nature.com/articles/s41550-025-02660-1'
                }
              ]
            },
            {
              title: 'Magnetospheric Physics: What triggers magnetospheric substorms?',
              summary:
                'This is one of the most violent phenomena in Earth\'s magnetosphere, but its trigger mechanism is still unclear.',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s41467-025-65580-8'
                }
              ]
            },
            {
              title: 'Condensed Matter / Strong Correlation: What is the unified theory of strange metals and unconventional superconductivity?',
              summary:
                'Transport behavior in some materials cannot be explained by conventional Fermi-liquid theory, and the mechanism remains debated.',
              sources: [
                {
                  label: 'Science',
                  href: 'https://www.science.org/doi/10.1126/science.abh4273'
                }
              ]
            }
          ]
        },
        {
          key: 'biology',
          label: 'Biology',
          items: [
            {
              title: 'Genomics / Developmental Biology: How can genotype be mapped accurately to phenotype?',
              summary:
                'The same genetic variant can yield very different outcomes across environments, developmental stages, and genetic backgrounds.',
              sources: [
                {
                  label: 'NSF ORCC',
                  href: 'https://www.nsf.gov/funding/opportunities/orcc-organismal-response-climate-change/505963/nsf22-513/solicitation'
                }
              ]
            },
            {
              title: 'Cell Biology / Systems Biology: How can we build truly predictive whole-cell models?',
              summary:
                'Unifying gene regulation, metabolism, protein interactions, signaling, and cell cycle into one predictive framework remains far from solved.',
              sources: [
                {
                  label: 'NSF BIO Centers & Institutes',
                  href: 'https://www.nsf.gov/bio/centers-institutes'
                }
              ]
            },
            {
              title: 'Synthetic Biology: What is the minimal set required for a cell to sustain life?',
              summary:
                'This is not just a gene checklist; it requires identifying essential modules, replaceable functions, and environment-dependent boundaries.',
              sources: [
                {
                  label: 'NSF BIO Centers & Institutes',
                  href: 'https://www.nsf.gov/bio/centers-institutes'
                }
              ]
            },
            {
              title: 'Synthetic Biology / Origins: Can we build a synthetic cell from scratch?',
              summary:
                'The challenge is integrating membrane, metabolism, information replication, energy use, and division into a sustainable system.',
              sources: [
                {
                  label: 'NSF Biology + AI',
                  href: 'https://www.nsf.gov/funding/opportunities/dcl-advancing-research-intersection-biology-artificial'
                }
              ]
            },
            {
              title: 'Cross-scale Biology: How do we connect mechanisms from molecules to cells, organisms, communities, and Earth systems?',
              summary:
                'Biology is strongly multi-scale, and rules at one level do not automatically extrapolate to higher levels.',
              sources: [
                {
                  label: 'NSF Biology Integration Institutes',
                  href: 'https://www.nsf.gov/funding/opportunities/bii-biology-integration-institutes/505684/nsf23-511/solicitation'
                }
              ]
            },
            {
              title: 'Regulatory Biology / Epigenetics: What is the cell-type-specific grammar of transcriptional regulation?',
              summary:
                'We know sequence and regulators matter, but still lack generalized rules that unify DNA sequence, chromatin state, and transcriptional output.',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-024-08391-z'
                }
              ]
            },
            {
              title: 'Regenerative Biology: Why can some animals regenerate whole organs or bodies while humans largely cannot?',
              summary:
                'This spans injury response, immunity, stem cells, and redeployment of developmental programs, and key regeneration cues remain unresolved.',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s42003-023-05505-7'
                }
              ]
            },
            {
              title: 'Neurobiology / Barrier Biology: How is the human blood-brain barrier maintained and destabilized at true human scale?',
              summary:
                'Animal and in vitro models have limited transferability, leaving major gaps in brain disease understanding and drug delivery translation.',
              sources: [
                {
                  label: 'Nature Neuroscience',
                  href: 'https://www.nature.com/articles/s41593-025-02123-w'
                }
              ]
            },
            {
              title: 'Ecology / Evolutionary Biology: How do organisms adapt under rapid climate change instead of collapsing?',
              summary:
                'A key bottleneck is linking molecular responses to organism performance, population dynamics, and ecosystem outcomes in one predictive chain.',
              sources: [
                {
                  label: 'NSF ORCC',
                  href: 'https://www.nsf.gov/funding/opportunities/orcc-organismal-response-climate-change/505963/nsf22-513/solicitation'
                }
              ]
            },
            {
              title: 'Bioengineering / Industrialization: How can biological systems be industrialized in a stable, predictable way?',
              summary:
                'Lab success does not guarantee manufacturing robustness; scale-up reliability, quality consistency, and cost control remain major bottlenecks.',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/DELS-BCST-13-01'
                }
              ]
            }
          ]
        },
        {
          key: 'medicine',
          label: 'Medicine',
          items: [
            {
              title: 'Precision Medicine: How can we predict how a specific patient will respond to a specific treatment?',
              summary:
                'A core challenge in precision medicine is integrating genomics, omics, medical history, imaging, and behavioral data into stable individual-level treatment-response prediction.',
              sources: [
                {
                  label: 'Nature npj Digital Medicine',
                  href: 'https://www.nature.com/articles/s41746-024-01402-3'
                }
              ]
            },
            {
              title: 'Digital Health / Clinical Translation: Why have digital biomarkers not yet entered routine care at scale?',
              summary:
                'The main barriers are evidence-generation cost, regulatory requirements, data bias, reproducibility, and weak integration into clinical workflows.',
              sources: [
                {
                  label: 'Nature Communications Medicine',
                  href: 'https://www.nature.com/articles/s43856-026-01450-8'
                }
              ]
            },
            {
              title: 'Oncology: How can truly reliable early screening and diagnosis be achieved, rather than just improving lab metrics?',
              summary:
                'Early cancer detection is still constrained by sensitivity, specificity, standardization, access in low-resource settings, and false-positive management.',
              sources: [
                {
                  label: 'PMC Early Cancer Detection Review',
                  href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12359849/'
                }
              ]
            },
            {
              title: 'Oncology: How can predictive and resistance biomarkers be made reliable enough to guide treatment?',
              summary:
                'A central unmet need in clinical cancer research is identifying which patients will benefit and which will develop resistance.',
              sources: [
                {
                  label: 'npj Precision Oncology',
                  href: 'https://www.nature.com/articles/s41698-026-01295-3'
                }
              ]
            },
            {
              title: 'Infectious Disease / Public Health: How can antimicrobial resistance be contained?',
              summary:
                'WHO still treats AMR as a priority requiring accelerated national and global response, showing that antibiotic resistance remains far from controlled.',
              sources: [
                {
                  label: 'WHO World Health Assembly',
                  href: 'https://apps.who.int/gb/ebwha/pdf_files/WHA77-REC3/A77_REC3_Interactive_en.pdf'
                }
              ]
            },
            {
              title: 'Vaccines / Pandemic Preparedness: How can faster vaccine and response platforms be built for unknown pathogens?',
              summary:
                'The key is not just producing one vaccine, but building platforms that can rapidly adapt to new pathogens and shorten development and deployment timelines.',
              sources: [
                {
                  label: 'Horizon Europe Health',
                  href: 'https://research-and-innovation.ec.europa.eu/document/download/cca383f5-67a6-4b72-a8f2-8b8cd041fa91_en'
                }
              ]
            },
            {
              title: 'Neuromedicine / Aging: How can dementia and other neurodegenerative diseases truly be delayed or reversed?',
              summary:
                'WHO continues to frame dementia as a global health challenge, while real-world progress in early diagnosis, mechanism understanding, and effective intervention remains limited.',
              sources: [
                {
                  label: 'WHO',
                  href: 'https://www.who.int/news-room/spotlight/10-key-global-health-moments-from-2021'
                }
              ]
            },
            {
              title: 'Mental Health: How can mental-health services truly reach populations instead of remaining policy slogans?',
              summary:
                'WHO\'s world mental-health report stresses that the challenge is not only treatment methods, but severe gaps in access, resources, and system-level coverage.',
              sources: [
                {
                  label: 'WHO World Mental Health Report',
                  href: 'https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content'
                }
              ]
            },
            {
              title: 'Clinical AI / Data Medicine: How can large-scale real-world data be used to learn disease natural history and improve clinical decisions?',
              summary:
                'There is progress in predicting disease trajectories from large health-record datasets, but these models are still far from broad, robust, interpretable clinical use.',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-025-09529-3'
                }
              ]
            },
            {
              title: 'Health Systems / Global Health: How can health outcomes, equity, and system resilience all improve under fiscal constraints?',
              summary:
                'Frontier health challenges are not only disease-specific; they also include system-level tradeoffs across health, equity, economic resilience, and climate resilience.',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/NAM-NAM%20PRGM-25-02/event/46575'
                }
              ]
            }
          ]
        },
        {
          key: 'enterprise',
          label: 'Enterprise',
          items: [
            {
              title: 'Industry / Enterprise: How can global supply chains remain resilient under simultaneous geopolitical conflict, climate shocks, and cyberattacks?',
              summary:
                'Many current supply-chain approaches remain short-term and local, making them poorly suited to systemic shocks and persistent fragmentation.',
              sources: [
                {
                  label: 'WEF',
                  href: 'https://www.weforum.org/stories/2025/07/strengthening-manufacturing-supply-chains-new-industrial-era/'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How should companies reconfigure cross-regional supply chains as global fragmentation and regulatory divergence intensify?',
              summary:
                'Supply chains are no longer just a cost-optimization problem; they must also handle protectionism, regionalization, and regulatory divergence.',
              sources: [
                {
                  label: 'WEF',
                  href: 'https://www.weforum.org/stories/2025/06/how-supply-chains-need-to-adapt-to-a-shifting-global-landscape/'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can advanced manufacturing shorten time-to-competency for new workers?',
              summary:
                'Slow training for complex roles and rapid retirement of experienced staff directly constrain productivity and capacity expansion.',
              sources: [
                {
                  label: 'McKinsey Workforce',
                  href: 'https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/investing-in-the-manufacturing-workforce-to-accelerate-productivity'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: Why does productivity still struggle to improve sustainably after digital and AI investment?',
              summary:
                'Many firms have digitized, but ROI, organizational coordination, and process redesign remain too weak to deliver lasting productivity gains.',
              sources: [
                {
                  label: 'McKinsey Operations 2025',
                  href: 'https://www.mckinsey.com/capabilities/operations/our-insights/powering-productivity-operations-insights-for-2025'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can supply-chain maturity be assessed quantitatively instead of relying on experience-based risk judgment?',
              summary:
                'Raw materials, manufacturing steps, and workforce readiness are often evaluated separately, with no unified and comparable readiness framework.',
              sources: [
                {
                  label: 'DOE SCRL',
                  href: 'https://www.energy.gov/sites/default/files/2025-01/Identifying_Risks_in_the_Energy_Industrial_Base-Supply_Chain_Readiness_Levels_vFinalPublication.pdf'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: Which raw materials and manufacturing steps are the most fragile bottlenecks in energy-manufacturing chains?',
              summary:
                'Readiness varies widely across raw materials, processing, and manufacturing steps, and many links remain low-readiness bottlenecks.',
              sources: [
                {
                  label: 'DOE SCRL Preliminary Analysis',
                  href: 'https://www.energy.gov/sites/default/files/2024-12/Supply_Chain_Readiness_Level_SCRL_Analysis_Nov-2024_2024.12.20.pdf'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can advanced manufacturing technologies move faster from R&D to scaled deployment?',
              summary:
                'Technology transfer, scale-up, and workforce development remain core obstacles to industrial adoption.',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/our-work/a-vision-for-the-manufacturing-usa-program-in-2030-and-2035'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can new energy and industrial technologies cross the commercialization valley of death?',
              summary:
                'The path from technical maturity to commercial viability often stalls on manufacturing processes, cost, quality consistency, and market entry.',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/DEPS-BEES-20-01'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can manufacturing turn resilience into a foundational transformation capability rather than an add-on?',
              summary:
                'Traditional manufacturing transformation emphasized efficiency, but in the current risk environment resilience itself has become a core capability.',
              sources: [
                {
                  label: 'WEF',
                  href: 'https://www.weforum.org/stories/2025/06/this-is-the-next-stage-in-manufacturing-s-evolution/'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can advanced manufacturing solve long-term skill shortages and workforce discontinuity?',
              summary:
                'Expansion in many strategic industries is constrained less by equipment than by the supply and training of skilled labor.',
              sources: [
                {
                  label: 'McKinsey Shipbuilding Workforce',
                  href: 'https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/helming-a-sea-change-building-the-future-workforce-for-us-shipbuilding'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can high-reliability sectors such as aviation maintenance reduce shortages in technical trades?',
              summary:
                'These sectors demand high skill levels and long training cycles, so labor shortages directly affect capacity and safety.',
              sources: [
                {
                  label: 'McKinsey Aviation Maintenance',
                  href: 'https://www.mckinsey.com/industries/travel/our-insights/addressing-the-shortage-of-aviation-maintenance-technicians'
                }
              ]
            },
            {
              title: 'Industry / Enterprise: How can AI, agents, and robots form effective division of labor with humans instead of creating new friction?',
              summary:
                'The real industrial challenge is not whether to automate, but how humans, agents, and robots can coordinate reliably in practice.',
              sources: [
                {
                  label: 'McKinsey MGI',
                  href: 'https://www.mckinsey.com/mgi/our-research/agents-robots-and-us-skill-partnerships-in-the-age-of-ai'
                }
              ]
            }
          ]
        },
        {
          key: 'chemistry',
          label: 'Chemistry',
          items: [
            {
              title: 'Reaction Discovery / Computational Chemistry: How can complete reaction pathways in complex systems be discovered automatically?',
              summary:
                'As reaction steps grow, the number of possible pathways can explode combinatorially; even now, predicting all chemical reactions remains a major challenge.',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s42004-025-01630-y'
                }
              ]
            },
            {
              title: 'Catalysis: How can genuinely useful new catalytic reactions be discovered faster?',
              summary:
                'Catalysis underpins most chemical manufacturing, but discovery of new catalytic processes still lags far behind needs in energy, fuels, and high-value chemicals.',
              sources: [
                {
                  label: 'Grand Challenges in Catalysis',
                  href: 'https://www.sciencedirect.com/science/article/abs/pii/S0920586121004569'
                },
                {
                  label: 'DOE OSTI Catalysis Report',
                  href: 'https://science.osti.gov/-/media/bes/besac/pdf/catalysis_report.pdf'
                }
              ]
            },
            {
              title: 'Catalytic Mechanisms: How can catalyst structure be mapped reliably to activity, selectivity, and lifetime?',
              summary:
                'Connecting catalyst structure to catalytic chemistry remains one of the most central unsolved problems in catalyst design.',
              sources: [
                {
                  label: 'DOE OSTI Catalysis Report',
                  href: 'https://science.osti.gov/-/media/bes/besac/pdf/catalysis_report.pdf'
                }
              ]
            },
            {
              title: 'Green Chemistry / Electrochemistry: How can chemical synthesis remain stable under intermittent wind and solar power input?',
              summary:
                'Fluctuating renewable power can degrade common 3d-metal catalysts even under modest voltage shifts, making intermittent-energy-driven synthesis a major challenge.',
              sources: [
                {
                  label: 'Nature Sustainability',
                  href: 'https://www.nature.com/articles/s41893-025-01665-y'
                }
              ]
            },
            {
              title: 'Chiral Synthesis / Radical Chemistry: How can stereoselectivity in radical reactions be controlled reliably?',
              summary:
                'Because radical reactions are highly reactive and mechanistically complex, precise stereocontrol is still widely treated as a major challenge.',
              sources: [
                {
                  label: 'Nature Chemistry',
                  href: 'https://www.nature.com/nchem/volumes/17/issues/12'
                }
              ]
            },
            {
              title: 'CO2 and N2 Conversion: How can CO2 and N2 be efficiently converted into valuable chemicals and fuels?',
              summary:
                'These molecules are abundant but chemically inert, and achieving high selectivity, low energy input, and scalable conversion remains a core green-chemistry challenge.',
              sources: [
                {
                  label: 'ScienceDirect Review',
                  href: 'https://www.sciencedirect.com/science/article/abs/pii/S2095927325009168'
                }
              ]
            },
            {
              title: 'Catalyst Design: How can new catalysts be designed across broader reaction space rather than just tuned within known classes?',
              summary:
                'Many current AI and generative approaches remain constrained to specific reaction classes and predefined fragments, limiting real exploration of wider catalyst-design space.',
              sources: [
                {
                  label: 'Nature Communications',
                  href: 'https://www.nature.com/articles/s42004-025-01732-7'
                }
              ]
            },
            {
              title: 'Sustainable Chemical Engineering: How can sustainable chemistry be scaled reliably from lab routes to industrial production?',
              summary:
                'Laboratory feasibility does not guarantee manufacturing economics, stability, or sustainability, so scale-up remains a key bottleneck.',
              sources: [
                {
                  label: 'DOE Sustainable Chemistry',
                  href: 'https://www.energy.gov/sites/default/files/2025-01/iedo-sustainable-chemistry-roundtable-report.pdf'
                },
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/projects/DELS-BCST-22-01'
                }
              ]
            }
          ]
        },
        {
          key: 'materials',
          label: 'Materials Science',
          items: [
            {
              title: 'Materials Discovery: How can genuinely new high-performance materials be found beyond known material distributions?',
              summary:
                'Many models perform reasonably within training distributions, but fail when extrapolating to out-of-distribution material properties, limiting true breakthrough discovery.',
              sources: [
                {
                  label: 'Nature Computational Materials',
                  href: 'https://www.nature.com/articles/s41524-025-01808-x'
                },
                {
                  label: 'Foundation Models Review',
                  href: 'https://www.nature.com/articles/s41524-025-01538-0'
                }
              ]
            },
            {
              title: 'Materials Synthesis: How can feasible, reproducible synthesis routes be designed for target materials?',
              summary:
                'Knowing which material is desirable is different from knowing how to make it stably and reproducibly; identifying promising synthesis targets and routes remains a grand challenge.',
              sources: [
                {
                  label: 'Nature Computational Science',
                  href: 'https://www.nature.com/subjects/materials-science/natcomputsci'
                }
              ]
            },
            {
              title: 'Materials Genome / Translation: How can materials be accelerated from design and discovery to development, deployment, and cost reduction?',
              summary:
                'Materials science still gets stuck in the long chain from laboratory discovery to engineering deployment; compressing that chain remains a systemic challenge.',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/publications/26723'
                }
              ]
            },
            {
              title: 'Pilot and Scale-Up: How can enough mid-scale manufacturing and characterization capacity be built to cross the valley of death?',
              summary:
                'Many new materials are limited not by performance, but by insufficient mid-scale manufacturing and extreme-environment characterization needed to validate reproducibility and engineering readiness.',
              sources: [
                {
                  label: 'National Academies Workshop',
                  href: 'https://www.nationalacademies.org/event/44391_03-2025_part-2-of-a-workshop-on-mid-scale-manufacturing-characterization-capacity-accelerating-scale-up-and-transition-of-technologies-to-mitigate-dod-critical-materials-supply-challenges'
                }
              ]
            },
            {
              title: 'Critical Materials Supply Chains: How can disruption risk be reduced for the materials needed in the energy transition?',
              summary:
                'Critical materials are both essential for storage, generation, and transmission technologies and exposed to high supply-chain disruption risk, so strong performance does not imply secure supply.',
              sources: [
                {
                  label: 'DOE Critical Minerals and Materials',
                  href: 'https://www.energy.gov/sites/default/files/2025-01/critical-minerals-materials-program-january2025.pdf'
                },
                {
                  label: 'DOE 2023 Assessment',
                  href: 'https://www.energy.gov/sites/default/files/2023-07/doe-critical-material-assessment_07312023.pdf'
                }
              ]
            },
            {
              title: 'Clean Energy Materials: How can competitive and sustainable material and manufacturing systems be built for batteries, grids, nuclear, and hydrogen?',
              summary:
                'The challenge is no longer only material performance; it is full-chain industrial competitiveness shaped by product cost, global cost curves, and upstream mineral and material capacity.',
              sources: [
                {
                  label: 'DOE MESC FY2025',
                  href: 'https://www.energy.gov/sites/default/files/2024-12/FY2025_MMAC_Lab_Call_FINAL.pdf'
                },
                {
                  label: 'DOE SCRL Analysis',
                  href: 'https://www.energy.gov/sites/default/files/2024-12/Supply_Chain_Readiness_Level_%28SCRL%29_Analysis_Nov2024--2024.12.04.pdf'
                }
              ]
            },
            {
              title: 'Extreme-Condition Materials: How can new materials be discovered and used stably under high pressure, extreme temperature, and strong irradiation?',
              summary:
                'High-pressure science keeps uncovering unconventional materials, but stable characterization, mechanistic understanding, and transfer to real devices remain frontier problems.',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/d42473-025-00380-8'
                }
              ]
            },
            {
              title: 'Generative Materials Design: Can generative models truly design new materials that are synthesizable, stable, and target-matched?',
              summary:
                'Generative models have improved the share of novel and stable candidates, but the end-to-end loop from generation to reproducible experiments and scalable production is still incomplete.',
              sources: [
                {
                  label: 'Nature',
                  href: 'https://www.nature.com/articles/s41586-025-08628-5'
                },
                {
                  label: 'Nature Computational Materials Review',
                  href: 'https://www.nature.com/articles/s41524-025-01538-0'
                }
              ]
            },
            {
              title: 'Standards and Deployment: Which standards, shared methods, and policy barriers are blocking advanced materials from real-world use?',
              summary:
                'Advanced-material deployment is constrained not only by performance, but also by knowledge gaps, standards, shared practices, and policy barriers.',
              sources: [
                {
                  label: 'National Academies Study',
                  href: 'https://www.nationalacademies.org/projects/TRB-CAAS-23-01/event/44056'
                }
              ]
            }
          ]
        },
        {
          key: 'other',
          label: 'Other',
          items: [
            {
              title: 'Other (Climate): How can cities truly achieve climate neutrality by 2030?',
              summary:
                'The challenge is not setting the target, but coordinating energy, transport, buildings, finance, and governance in real implementation.',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe/climate-neutral-and-smart-cities_en'
                }
              ]
            },
            {
              title: 'Other (Climate): How can regions and communities build real climate-adaptation capacity?',
              summary:
                'The key challenge is turning risk identification, adaptation-pathway design, and implementation into real community-scale action rather than policy slogans.',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe/adaptation-climate-change_en'
                }
              ]
            },
            {
              title: 'Other (Ocean and Waters): How can ocean and water ecosystems truly be restored by 2030 rather than only through local fixes?',
              summary:
                'This involves pollution, ecological restoration, cross-basin governance, and coordination across technology and policy, making it a systemic open problem.',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe_en'
                }
              ]
            },
            {
              title: 'Other (Soil and Agriculture): How can soil health be restored and sustainable agricultural soil systems be built?',
              summary:
                'The challenge is that soil degradation is long-term, region-specific, and tightly coupled to agriculture and ecosystems.',
              sources: [
                {
                  label: 'Horizon Europe Mission',
                  href: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe/eu-missions-horizon-europe_en'
                }
              ]
            },
            {
              title: 'Other (Disaster Science): How can volcanic precursors be detected earlier and eruption timing and impact predicted more accurately?',
              summary:
                'This remains a grand challenge in volcano science because it directly affects monitoring, warning, and disaster mitigation.',
              sources: [
                {
                  label: 'National Academies',
                  href: 'https://www.nationalacademies.org/read/24650/chapter/9'
                }
              ]
            },
            {
              title: 'Other (Labor and Society): How can large-scale skill mismatch and workforce discontinuity be avoided during technological change?',
              summary:
                'Skills gaps remain among the biggest barriers to enterprise transformation, showing that how people keep up with AI and automation is still unresolved.',
              sources: [
                {
                  label: 'WEF Future of Jobs',
                  href: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/'
                }
              ]
            },
            {
              title: 'Other (AI Governance): How can human oversight remain real in AI systems rather than being effectively displaced?',
              summary:
                'Human oversight, transparency, fairness, and human dignity remain central AI-ethics principles, showing that final human control is still an open issue.',
              sources: [
                {
                  label: 'UNESCO',
                  href: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics'
                }
              ]
            },
            {
              title: 'Other (AI Governance): How can systemic social harms be prevented as AI is deployed broadly?',
              summary:
                'This includes discrimination, manipulation, unclear accountability, concentration of power, and disproportionate harm to vulnerable groups, yet globally consistent and enforceable governance remains absent.',
              sources: [
                {
                  label: 'UNESCO AI Ethics Recommendation',
                  href: 'https://unesdoc.unesco.org/ark%3A/48223/pf0000380455'
                }
              ]
            }
          ]
        }
      ]
    },
    aboutSection: {
      title: 'About LocalClaw',
      description:
        'We focus on solving complex problems by connecting local agent capabilities, advanced services, enterprise needs, and frontier research into practical solutions.',
      contactTitle: 'Contact Us',
      contacts: [
        { label: 'Phone', value: '18811753654', href: 'tel:18811753654' },
        { label: 'Personal Email', value: PERSONAL_EMAIL, href: `mailto:${PERSONAL_EMAIL}` },
        { label: 'LinkedIn', value: 'Stephen Su', href: LINKEDIN_URL, external: true },
        { label: 'GitHub', value: 'stephensu66', href: GITHUB_URL, external: true }
      ],
      button: 'Contact Us'
    },
    footer: {
      placeholderText: 'To be filled',
      linkGroups: [
        {
          title: 'Community',
          links: [
            { label: 'Roadmap', href: '#' },
            { label: 'Report Bug', href: '#' },
            { label: 'Security Report', href: '#' }
          ]
        },
        {
          title: 'About',
          links: [
            { label: 'About Us', href: '#about' },
            { label: 'Contact', href: '#about-contact' },
            { label: 'Privacy Policy', href: '/legal/privacy.html?lang=en' },
            { label: 'Terms of Service', href: '/legal/terms.html?lang=en' }
          ]
        },
        {
          title: 'Support',
          links: [
            { label: 'Help Center', href: '#' },
            { label: 'Server Manual', href: '#' },
            { label: 'Download Notes', href: '/legal/download.html?lang=en' }
          ]
        }
      ],
      companyInfo: [
        { label: 'Phone', value: '18811753654' },
        { label: 'Personal Email', value: PERSONAL_EMAIL, href: `mailto:${PERSONAL_EMAIL}` },
        {
          label: 'ICP Filing',
          value: '京ICP备2025142068号-1',
          href: 'https://beian.miit.gov.cn/#/Integrated/index'
        }
      ],
      socialLinks: [
        { label: 'Email', href: `mailto:${PERSONAL_EMAIL}` },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
        { label: 'GitHub', href: GITHUB_URL, external: true }
      ],
      copyright: 'Copyright ©2026 北京超维引力科技有限公司 All Rights Reserved.'
    }
  }
};

const frCategoryLabels = {
  ai: 'IA',
  math: 'Mathematiques',
  physics: 'Physique',
  biology: 'Biologie',
  medicine: 'Medecine',
  enterprise: 'Entreprise',
  chemistry: 'Chimie',
  materials: 'Science des materiaux',
  other: 'Autres'
};

const mockData = {
  ...baseData,
  zh: {
    ...baseData.zh,
    languageOptions: LANGUAGE_OPTIONS
  },
  en: {
    ...baseData.en,
    languageOptions: LANGUAGE_OPTIONS
  },
  fr: {
    ...baseData.en,
    languageOptions: LANGUAGE_OPTIONS,
    navItems: [
      { label: 'Accueil', href: '#home' },
      { label: 'Produits', href: '#products' },
      { label: 'Frontiere', href: '#problems' },
      { label: 'A propos', href: '#about' }
    ],
    pages: {
      home: {
        title: 'Accueil',
        description: 'Vue generale des produits, du telechargement et des services.'
      },
      products: {
        title: 'Produits',
        description: 'Capacites principales, cas d usage et perimetre fonctionnel.'
      },
      problems: {
        title: 'Problemes de frontiere',
        description: 'Defis techniques et axes de recherche que nous explorons.'
      },
      about: {
        title: 'A propos',
        description: 'Contexte de l equipe, philosophie produit et contact.'
      }
    },
    hero: {
      ...baseData.en.hero,
      title: 'Telecharger LocalClaw',
      subtitle: 'Un outil agent de bureau securise et controlable',
      macButton: 'Telecharger pour macOS',
      macOptions: [
        {
          label: 'Apple Silicon',
          description: 'Pour les Mac M1 / M2 / M3 / M4',
          href: MACOS_APPLE_SILICON_DOWNLOAD_URL
        },
        {
          label: 'Intel',
          description: 'Pour les Mac avec processeur Intel',
          href: MACOS_INTEL_DOWNLOAD_URL
        }
      ],
      versionLabel: 'Version',
      systemLabel: 'Systemes',
      installGuideLabel: 'Guide d installation',
      installGuideHref: '/legal/download.html?lang=fr',
      legalNoticePrefix: 'En telechargeant, vous acceptez',
      privacyPolicyLabel: 'Politique de confidentialite',
      privacyPolicyHref: '/legal/privacy.html?lang=fr',
      userAgreementLabel: 'Conditions d utilisation',
      userAgreementHref: '/legal/terms.html?lang=fr',
      downloadNoteLabel: 'Notes de telechargement',
      downloadNoteHref: '/legal/download.html?lang=fr'
    },
    quickFeatures: [
      { label: 'Parametres de securite' },
      { label: 'Acces distant' },
      { label: 'Collaboration equipe' },
      { label: 'Personnalisation entreprise' },
      { label: 'Demander une offre sur mesure', highlight: true }
    ],
    serviceSection: {
      ...baseData.en.serviceSection,
      title: 'Offres et services',
      subtitle: 'La version gratuite est disponible, avec une option avancee pour les entreprises.',
      plans: [
        {
          ...baseData.en.serviceSection.plans[0],
          name: 'Gratuit',
          price: 'Gratuit',
          period: 'Local mono-machine',
          description: 'Pour les developpeurs individuels, les essais et le debogage local',
          buttonText: 'Telecharger'
        },
        {
          ...baseData.en.serviceSection.plans[1],
          name: 'Avance',
          badge: 'Recommande',
          price: 'Contacter les ventes',
          period: 'Deploiement entreprise',
          description: 'Pour les equipes de production et les exigences de conformite',
          buttonText: 'Demander une offre'
        }
      ]
    },
    productSection: {
      ...baseData.en.productSection,
      title: 'Portefeuille produits',
      subtitle: 'Trois lignes de produits pour la productivite locale, l intelligence de frontiere et la communaute technique.',
      backToProductsLabel: 'Retour aux produits',
      corePointsTitle: 'Capacites cles',
      scenariosTitle: 'Cas d usage',
      freeLabel: 'Gratuit',
      advancedLabel: 'Avance',
      products: [
        {
          ...baseData.en.productSection.products[0],
          badge: 'Agent de bureau',
          tagline: 'Gratuit sur macOS',
          summary:
            'Une plateforme agent locale pour developpeurs et equipes, avec execution controlable, journaux observables et permissions tracables.',
          highlights: [
            'Telechargement macOS gratuit avec versions Apple Silicon et Intel',
            'Interfaces unifiees pour orchestration et appels d outils',
            'Passage fluide de la version gratuite au service avance'
          ],
          downloads: [
            {
              label: 'Telecharger pour macOS',
              variant: 'primary',
              options: [
                {
                  label: 'Apple Silicon',
                  description: 'Pour les Mac M1 / M2 / M3 / M4',
                  href: MACOS_APPLE_SILICON_DOWNLOAD_URL
                },
                {
                  label: 'Intel',
                  description: 'Pour les Mac avec processeur Intel',
                  href: MACOS_INTEL_DOWNLOAD_URL
                }
              ]
            }
          ],
          comparisonTitle: 'Gratuit vs Avance',
          cta: {
            label: 'Telechargement et notes',
            href: '/legal/download.html?lang=fr'
          },
          detail: {
            ...baseData.en.productSection.products[0].detail,
            actions: [
              { label: 'Voir le service avance', href: '#home' },
              { label: 'Contacter l equipe', href: '#about-contact' }
            ],
            corePoints: [
              'Architecture locale avec journaux et permissions tracables',
              'Interface graphique et commandes pour differents usages',
              'Politiques de permission par defaut avec historique auditable',
              'Extension progressive des usages individuels vers les equipes'
            ],
            scenarios: [
              'Developpeurs individuels automatisant des taches locales',
              'Petites equipes partageant des modeles de taches',
              'Equipes techniques integrant des workflows internes'
            ]
          }
        },
        {
          ...baseData.en.productSection.products[1],
          badge: 'Intelligence de frontiere',
          name: 'Super Agent',
          tagline: 'Initiative super-agent pour la recherche et les problemes complexes',
          summary:
            'Inspiree des directions de recherche de type DeepMind, concue pour les problemes scientifiques, industriels et de frontiere.',
          highlights: [
            'Collaboration multi-agents pour les taches longues',
            'Integration de preuves issues d articles, de code et d experiences',
            'Boucle complete de la definition du probleme a la validation'
          ],
          cta: {
            label: 'Explorer les axes de recherche',
            href: '#problems'
          }
        },
        {
          ...baseData.en.productSection.products[2],
          badge: 'Mini-programme WeChat',
          tagline: 'Plateforme sociale technique hors ligne',
          summary:
            'Une plateforme reliant developpeurs, chercheurs et equipes autour de sujets techniques reels.',
          highlights: [
            'Decouverte, inscription et organisation d evenements',
            'Discussions apres evenement et capitalisation des connaissances',
            'Connexions techniques de qualite et opportunites de collaboration'
          ],
          cta: {
            label: 'Communaute et partenariat',
            href: '#about'
          }
        }
      ]
    },
    problemSection: {
      ...baseData.en.problemSection,
      title: 'Problemes de frontiere',
      subtitle: 'Parcourez les principaux defis par domaine. Cliquez sur une categorie pour voir les details et references.',
      sourceLabel: 'Source',
      categories: baseData.en.problemSection.categories.map((category) => ({
        ...category,
        label: frCategoryLabels[category.key] || category.label
      }))
    },
    aboutSection: {
      ...baseData.en.aboutSection,
      title: 'A propos de LocalClaw',
      description:
        'Nous connectons les capacites d agents locaux, les services avances, les besoins des entreprises et la recherche de frontiere afin de transformer des problemes complexes en solutions utilisables.',
      contactTitle: 'Nous contacter',
      contacts: [
        { label: 'Telephone', value: '18811753654', href: 'tel:18811753654' },
        { label: 'Email personnel', value: PERSONAL_EMAIL, href: `mailto:${PERSONAL_EMAIL}` },
        { label: 'LinkedIn', value: 'Stephen Su', href: LINKEDIN_URL, external: true },
        { label: 'GitHub', value: 'stephensu66', href: GITHUB_URL, external: true }
      ],
      button: 'Nous contacter'
    },
    footer: {
      ...baseData.en.footer,
      placeholderText: 'A completer',
      linkGroups: [
        {
          title: 'Communaute',
          links: [
            { label: 'Roadmap', href: '#' },
            { label: 'Signaler un bug', href: '#' },
            { label: 'Rapport securite', href: '#' }
          ]
        },
        {
          title: 'A propos',
          links: [
            { label: 'A propos', href: '#about' },
            { label: 'Contact', href: '#about-contact' },
            { label: 'Confidentialite', href: '/legal/privacy.html?lang=fr' },
            { label: 'Conditions', href: '/legal/terms.html?lang=fr' }
          ]
        },
        {
          title: 'Support',
          links: [
            { label: 'Aide', href: '#' },
            { label: 'Manuel serveur', href: '#' },
            { label: 'Notes de telechargement', href: '/legal/download.html?lang=fr' }
          ]
        }
      ],
      companyInfo: [
        { label: 'Telephone', value: '18811753654' },
        { label: 'Email personnel', value: PERSONAL_EMAIL, href: `mailto:${PERSONAL_EMAIL}` },
        {
          label: 'ICP',
          value: '京ICP备2025142068号-1',
          href: 'https://beian.miit.gov.cn/#/Integrated/index'
        }
      ],
      socialLinks: [
        { label: 'Email', href: `mailto:${PERSONAL_EMAIL}` },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
        { label: 'GitHub', href: GITHUB_URL, external: true }
      ],
      copyright: 'Copyright ©2026 北京超维引力科技有限公司. Tous droits reserves.'
    }
  }
};

export default mockData;
